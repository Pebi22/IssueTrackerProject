import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssueListComponent } from './components/issue-list/issue-list.component';
import { IssueDetailsComponent } from './components/issue-details/issue-details.component';
import { AddIssueComponent } from './components/add-issue/add-issue.component';

const routes: Routes = [
  { path: '', redirectTo: 'issues', pathMatch: 'full' },
  { path: 'issues', component: IssueListComponent },
  { path: 'issues/:id', component: IssueDetailsComponent },
  { path: 'add', component: AddIssueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
