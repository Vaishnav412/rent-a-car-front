import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-landing',
  templateUrl: './user-landing.component.html',
  styleUrls: ['./user-landing.component.css']
})
export class UserLandingComponent implements OnInit {

  getdetails:any=[]
  userEmail:any={}

  constructor(private api:ApiService,private route:Router,private ar:ActivatedRoute){}
  ngOnInit(): void {
   
    this.userEmail=localStorage.getItem("userEmail")

    



    

  this.getAllDetails()
  }

  getAllDetails=()=>{
    this.api.getAlldetails().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.getdetails=res
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })

  }

  addToWishlists=(email:any,id:any,model:any,name:any,photo:any,description:any,type:any,transmission:any,color:any,year:any,seat:any,kilometer:any,price:any)=>{

    console.log(email,id,model,name,photo,description,type,transmission,color,year,seat,kilometer,price);
    
    const bodyData={email,id,model,name,photo,description,type,transmission,color,year,seat,kilometer,price}


    this.api.addToWishlist(bodyData).subscribe({
      next:(res:any)=>{
        console.log(res);
        alert("Add to wishlist Successfully")

        window.location.reload()
        
      },
      error:(err:any)=>{
        console.log(err);
        alert("Already exist")
        
      }
    })
  }

}
