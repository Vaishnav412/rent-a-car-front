import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {

  getdetails:any=[]
  userData:any={}

  constructor(private api:ApiService,private route:Router,private ar:ActivatedRoute){}
  ngOnInit(): void {

    this.ar.params.subscribe((res:any)=>{
      const{userId}=res
      console.log(userId);
      this.api.getAsingle_id(userId).subscribe(res=>{
        this.userData=res
        console.log(this.userData);
        
      })

      
    })

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
//   isLoggedIn() {
//     return !!localStorage.getItem("currentUser");
// }



  // addToWishlist

  addToWishlists=(email:any,id:any,model:any,name:any,photo:any,description:any,type:any,transmission:any,color:any,year:any,seat:any,kilometer:any,price:any)=>{

    console.log(email,id,model,name,photo,description,type,transmission,color,year,seat,kilometer,price);
    
    const bodyData={email,id,model,name,photo,description,type,transmission,color,year,seat,kilometer,price}


    this.api.addToWishlist(bodyData).subscribe({
      next:(res:any)=>{
        console.log(res);
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

  

}
