import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSingleDisplayComponent } from './user-single-display/user-single-display.component';
import { CartComponent } from './cart/cart.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { UserLandingComponent } from './user-landing/user-landing.component';

const routes: Routes = [{ path: '', component:  UserLandingComponent},
  {path:'user-allcars', component:UserDisplayComponent},
  {path:'user-single-view/:id',component: UserSingleDisplayComponent},
  {path:'user-cart',component:CartComponent},
  {path:'mybookings',component:MyBookingsComponent}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
