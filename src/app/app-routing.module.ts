import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLogingComponent } from './user-loging/user-loging.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserSignningComponent } from './user-signning/user-signning.component';

const routes: Routes = [
  { path: '', component: UserLogingComponent },
  { path: 'app-user-logging', component: UserLogingComponent },
  { path: 'app-user-signning', component: UserSignningComponent },
  { path: 'app-user-dashboard', component: UserDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
