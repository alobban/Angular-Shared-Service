import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-test',
  template: `
    <p>
      test Works!
    </p>
    <div *ngIf="auth.isAuthenticated()">
      Injected Auth Service
    </div>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
