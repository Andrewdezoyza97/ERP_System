import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './dashboard/user-list/user-list/user-list.component';
import { UserAddComponent } from './dashboard/user-add/user-add/user-add.component';
import { UserUpdateComponent } from './dashboard/user-update/user-update/user-update.component';
import { LoginSigupComponent } from './user loging-signup/login-sigup/login-sigup.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserAddComponent,
    UserUpdateComponent,
    LoginSigupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
