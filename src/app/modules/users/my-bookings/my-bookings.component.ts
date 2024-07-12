import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit{

  getAllBook:any={}

  searchkey:any={}


  constructor(private api:ApiService){}
  ngOnInit(): void {

   
this.searchkey=localStorage.getItem("userEmail")

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

  canbook(_id:any){
    if(confirm("Are you sure cancel booking")){
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Your booking is cancel",
        showConfirmButton: false,
        timer: 1500
      });
    }
    this.api.cancelBooking(_id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.getAllBookings()
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
    
  }


  


}
