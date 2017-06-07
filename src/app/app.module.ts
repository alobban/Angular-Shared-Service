import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthService} from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { AuthCheckService } from './shared/auth-check.service';

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    HomeComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ AuthService, AuthCheckService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
