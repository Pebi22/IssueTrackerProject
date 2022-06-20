import { Component, Input, OnInit } from '@angular/core';
import { Issue } from 'src/models/issue';
import { IssueService } from 'src/app/services/issue.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  @Input() issue?: Issue;

  constructor(private issueService: IssueService) {}

  ngOnInit(): void {}

  //deletes
  deleteComment(commentId: number): void {
    let issueId = this.issue!.id;
    this.issueService.deleteComment(commentId).subscribe((c) => {
      this.issueService.getIssue(issueId).subscribe((i) => (this.issue = i));
    });
  }
}
