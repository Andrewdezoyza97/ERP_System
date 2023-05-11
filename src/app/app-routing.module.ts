import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './dashboard/user-list/user-list/user-list.component';
import { UserAddComponent } from './dashboard/user-add/user-add/user-add.component';
import { UserUpdateComponent } from './dashboard/user-update/user-update/user-update.component';
import { LoginSigupComponent } from './user loging-signup/login-sigup/login-sigup.component';
import { authGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: '',redirectTo:'app-login-sigup', pathMatch:'full'},
  { path: 'app-user-list', component: UserListComponent ,canActivate:[authGuard]},
  { path: 'app-user-add', component: UserAddComponent,canActivate:[authGuard] },
  {path:'app-user-update/:id', component:UserUpdateComponent,canActivate:[authGuard]},
  {path:'app-login-sigup', component:LoginSigupComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
