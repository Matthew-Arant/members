import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private _http: HttpClient) { }

  addMember(data: any): Observable<any> {
    return this._http.post(this.getURL(), data);
  }

  updateMember(data: any): Observable<any> {
    return this._http.patch(this.getURLWithId(data.id), data);
  }

  deleteMember(id: number) {
    return this._http.delete(this.getURLWithId(id));
  }

  getMemberList(): Observable<any> {
    return this._http.get(this.getURL());
  }

  getMember(id: number): Observable<any> {
    return this._http.get(this.getURLWithId(id));
  }

  private getURL(): string {
    return 'membersapi.vercel.app/member'
  }

  private getURLWithId(id: number): string {
    return `${this.getURL()}/${id}`
  }

}
