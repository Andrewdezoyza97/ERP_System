import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLogingComponent } from './user-loging/user-loging.component';
import { RouterModule } from '@angular/router';
import { UserSignningComponent } from './user-signning/user-signning.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserLogingComponent,
    UserSignningComponent,
    UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'',component:UserLogingComponent},
      {path:'app-user-logging', component:UserLogingComponent},
      {path:'app-user-signning', component:UserSignningComponent},
      {path:'app-user-dashboard', component:UserDashboardComponent}
  ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
