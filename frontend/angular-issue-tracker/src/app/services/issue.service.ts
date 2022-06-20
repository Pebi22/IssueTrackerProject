import { Injectable } from '@angular/core';
import { Issue } from 'src/models/issue';
import { Comment } from 'src/models/comment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  issueUrl: string = 'http://localhost:8000/issues';
  commentUrl: string = 'http://localhost:8000/comments';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>(`${this.issueUrl}/`);
  }

  getIssue(id: number): Observable<Issue> {
    return this.http.get<Issue>(`${this.issueUrl}/${id}/comments/`);
  }
  updateIssue(id: number, issue: Issue): Observable<any> {
    return this.http.put(
      `${this.issueUrl}/${id}/comments/`,
      issue,
      this.httpOptions
    );
  }
  deleteIssue(id: number): Observable<any> {
    return this.http.delete(`${this.issueUrl}/${id}/`);
  }
  createIssue(issue: Issue): Observable<any> {
    return this.http.post(`${this.issueUrl}/`, issue, this.httpOptions);
  }
  deleteComment(commentId: number): Observable<any> {
    return this.http.delete(`${this.commentUrl}/${commentId}/`);
  }
  createComment(id: number, comment: Comment): Observable<any> {
    let result = this.http.post(
      `${this.commentUrl}/`,
      comment,
      this.httpOptions
    );
    console.log(result);
    return result;
  }
}
