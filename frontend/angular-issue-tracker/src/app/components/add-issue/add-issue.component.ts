import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/models/issue';
import { IssueService } from 'src/app/services/issue.service';

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.css'],
})
export class AddIssueComponent implements OnInit {
  issueTitle = '';
  issueBody = '';
  submitted = false;

  constructor(private issueService: IssueService) {}

  ngOnInit(): void {}

  //add new issue by using the inputs from the fields
  addNewIssue(): void {
    let issue = new Issue();
    issue.title = this.issueTitle;
    issue.body = this.issueBody;
    this.issueService.createIssue(issue).subscribe();
    this.issueTitle = '';
    this.issueBody = '';
  }
}
