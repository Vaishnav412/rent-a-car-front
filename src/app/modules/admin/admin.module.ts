import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { AdminContentSingleComponent } from './admin-content-single/admin-content-single.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminBookingsComponent } from './admin-bookings/admin-bookings.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminHomeComponent,
    NavbarComponent,
    AdminAddComponent,
    AdminEditComponent,
    AdminContentComponent,
    AdminContentSingleComponent,
    AdminBookingsComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
