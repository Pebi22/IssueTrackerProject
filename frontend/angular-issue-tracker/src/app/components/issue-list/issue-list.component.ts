import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/models/issue';
import { IssueService } from 'src/app/services/issue.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css'],
})
export class IssueListComponent implements OnInit {
  issues: Issue[] = [];

  headers = ['id', 'title', 'votes', 'comments', 'created', 'delete?'];

  constructor(private issueService: IssueService) {}

  ngOnInit(): void {
    this.issueService.getIssues().subscribe((issues) => {
      this.issues = issues;
    });
  }
  //get all Issues to populate the table
  getIssues(): void {
    this.issueService.getIssues().subscribe((issues) => (this.issues = issues));
  }

  //filter out the issue to be delete and send delete request to server
  deleteIssueID(id: number): void {
    this.issues = this.issues.filter((i) => i.id !== id);
    this.issueService.deleteIssue(id).subscribe();
  }
}
