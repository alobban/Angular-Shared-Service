import { Injectable } from '@angular/core';
import { Authenticated } from '../definitions/authenticated';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthCheckService {

  private authenticated: Authenticated;
  private subject: Subject<Authenticated> = new Subject<Authenticated>();

  getAuthentication$ = this.subject.asObservable();

  setAuthenticated(authenticated: Authenticated): void {
    console.log(authenticated);
    this.authenticated = authenticated;
    this.subject.next(authenticated);
  }

  getAuthenticated(): Observable<Authenticated> {
    return this.subject.asObservable();
  }

}
