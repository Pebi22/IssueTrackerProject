import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IssueService } from 'src/app/services/issue.service';
import { Issue } from 'src/models/issue';
import { Comment } from 'src/models/comment';

@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.css'],
})
export class IssueDetailsComponent implements OnInit {
  issue: Issue = new Issue();
  comments: Comment[] = [];
  commentBody: string = '';

  constructor(
    private issueService: IssueService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getIssueDetails();
  }

  //get the issue via the id provided in the url
  getIssueDetails(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.issueService.getIssue(id).subscribe((issue) => {
      this.issue = issue;
      console.log(this.issue);
    });
  }
  //vote the issue up and update it on server
  upVote(issue: Issue): void {
    issue.votes!++;
    this.issueService
      .updateIssue(issue.id, issue)
      .subscribe((i) => (this.issue = i));
  }
  //vote the issue down and update it on server
  downVote(issue: Issue): void {
    issue.votes!--;
    console.log(issue);

    this.issueService
      .updateIssue(issue.id, issue)
      .subscribe((i) => (this.issue = i));
  }
  //add a new comment and then retrieve the entire issue for display
  addComment(): void {
    let newComment: Comment = new Comment();
    newComment.body = this.commentBody;
    newComment.issue = this.issue.id;
    this.issueService
      .createComment(this.issue.id, newComment)
      .subscribe((i) => {
        this.issueService.getIssue(i.issue).subscribe((i) => (this.issue = i));
        console.log(i);
      });
  }
}
