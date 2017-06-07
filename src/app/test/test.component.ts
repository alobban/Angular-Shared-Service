import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { AuthCheckService } from '../shared/auth-check.service';
import { Authenticated } from '../definitions/authenticated';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-test',
  template: `
    <p>
      test Works!
    </p>
    <div *ngIf="auth.isAuthenticated()">
      Injected AuthCheckService with auth value of {{ retrieved?.isAuthenticated }}
    </div>
  `,
  styles: []
})
export class TestComponent implements OnInit, OnDestroy, OnChanges {

  retrieved: Authenticated;
  subscription: Subscription;

  constructor(public auth: AuthService, public authCheckService: AuthCheckService) {
    this.subscription = this.authCheckService.getAuthentication$.subscribe( authenticated => {
      this.retrieved = authenticated;
      console.log(this.retrieved);
    });
  }

  ngOnInit() {
    // this.subscription = this.authCheckService.getAuthenticated().subscribe( authenticated => {
    //   this.retrieved = authenticated;
    //   console.log(this.retrieved);
    // });
  }

  ngOnChanges() {
    // this.subscription = this.authCheckService.getAuthenticated().subscribe( authenticated => {
    //   this.retrieved = authenticated;
    //   console.log('Subscribing');
    // });
  }

  ngOnDestroy() {
    console.log('Unsubscribing!');
    this.subscription.unsubscribe();
  }

}
