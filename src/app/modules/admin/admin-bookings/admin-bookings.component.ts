import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin-bookings',
  templateUrl: './admin-bookings.component.html',
  styleUrls: ['./admin-bookings.component.css']
})
export class AdminBookingsComponent implements OnInit {

 getAllBook:any={}

  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.getAllBookings()
  }


  getAllBookings=()=>{


    this.api.allBookings().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.getAllBook=res
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

}
