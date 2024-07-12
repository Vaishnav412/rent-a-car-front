import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-single-display',
  templateUrl: './user-single-display.component.html',
  styleUrls: ['./user-single-display.component.css']
})
export class UserSingleDisplayComponent implements OnInit {

  singleDetails:any=[]
  userData:any={}
  BookForm:any;
  id:any={}
  userid:any={}

  
  
  


  constructor(private api:ApiService, private route:ActivatedRoute, private fb:FormBuilder, private router:Router){

    this.BookForm=this.fb.group({
      name:['',[Validators.required]],
      mobile:['',[Validators.required]],
      startingDate:['',[Validators.required]],
      endingDate:['',[Validators.required]],
      age:['',[Validators.required]],
      proofID:['',[Validators.required]]

      
    })

 

  }
  
  

  ngOnInit(): void {

    this.route.params.subscribe((data:any)=>{
      console.log(data);
      const {id}=data
      console.log(id);

      this.getSingleDetails(id)
      
      
    })
  

   this.userid= localStorage.getItem("userId")
   console.log(this.userid);
   this.userData=localStorage.getItem("userEmail")
   console.log(this.userData);
   
   


  }

  getSingleDetails=(id:any)=>{

    this.api.getsingledetails(id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.singleDetails=res
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

// booking
book(){
  if(this.BookForm.valid){
   const usermail=this.userData
   const name=this.BookForm.value.name
   const carname=this.singleDetails.name
   const carid=this.singleDetails.id
   const carmodel=this.singleDetails.model
   const color=this.singleDetails.color
   const transmission=this.singleDetails.transmission
   const price=this.singleDetails.price
   const carimage=this.singleDetails.photo
   const mobile=this.BookForm.value.mobile
   const startingDate=this.BookForm.value.startingDate
   const endingDate=this.BookForm.value.endingDate
   const age=this.BookForm.value.age
   const proofID=this.BookForm.value.proofID



   console.log(`${usermail} ${name} ${carname} ${carid} ${carmodel} ${color} ${transmission} ${price} ${carimage} ${mobile} ${startingDate} ${endingDate} ${age} ${proofID} `);

   const req={usermail,name,carname,carid,carmodel,color,transmission,price,carimage,mobile,startingDate,endingDate,age,proofID}

   this.api.addBooking(req).subscribe({
    
    next:(res:any)=>{
      console.log(res);


      

      this.router.navigateByUrl(`users/${this.userid}`)
    },error:(err:any)=>{
      console.log(err);
      
    }
   })
   
  }
  else{
      alert('please ')
  }
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your booking is success",
      showConfirmButton: false,
      timer: 1500
    });
  
}






}
