import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminContentSingleComponent } from './admin-content-single/admin-content-single.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminBookingsComponent } from './admin-bookings/admin-bookings.component';
import { AdminContentComponent } from './admin-content/admin-content.component';

const routes: Routes = [{ path: '', component: AdminContentComponent },
{path:'admin-add', component:AdminAddComponent},
{path:'admin-single-view/:id', component:AdminContentSingleComponent},
{path:'admin-edit/:id',component:AdminEditComponent},
{path:'admin-bookings',component:AdminBookingsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
