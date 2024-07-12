import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { UserSingleDisplayComponent } from './user-single-display/user-single-display.component';
import { CartComponent } from './cart/cart.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserbookingPipe } from './transform/userbooking.pipe';
import { WishlistPipe } from './transform/wishlist.pipe';
import { UserLandingComponent } from './user-landing/user-landing.component';



@NgModule({
  declarations: [
    UsersComponent,
    UserHomeComponent,
    UserDisplayComponent,
    UserSingleDisplayComponent,
    CartComponent,
    MyBookingsComponent,
    UserbookingPipe,
    WishlistPipe,
    UserLandingComponent
    
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
