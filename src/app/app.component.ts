import {Component, OnInit} from '@angular/core';
import { AuthService } from './auth/auth.service';
import { AuthCheckService } from './shared/auth-check.service';
import { Authenticated } from './definitions/authenticated';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  authenticated: Authenticated = {
    isAuthenticated: false
  };

  constructor(public auth: AuthService, public authCheckService: AuthCheckService) {
    this.auth.handleAuthentication();
  }

  ngOnInit() {
    if (this.auth.isAuthenticated() && this.auth.userProfile) {
      this.authenticated.isAuthenticated = this.auth.isAuthenticated();
      this.authenticated.profile = this.auth.userProfile;
      this.authCheckService.setAuthenticated(this.authenticated);
    } else {
      this.authCheckService.setAuthenticated(this.authenticated);
    }
  }
}
