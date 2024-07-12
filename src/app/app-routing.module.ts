import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{ path: '', component: LandingpageComponent },
{ path: 'user-register', component: UserRegisterComponent },
{path:'login', component:LoginComponent},

{ path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
{
  path: 'users/:userId', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
