import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit{

  userData:any={}
  badgecount:any={}
  

  constructor(private api:ApiService , private route:ActivatedRoute){}
  ngOnInit(): void {

   
    this.userData=localStorage.getItem("userId")
    console.log(this.userData);
    this.badgecount=localStorage.getItem("wishlist")

    
    this.api.allwishlist().subscribe({
      
    
    })
  }

  handleclick=()=>{
    localStorage.clear()
    // window.location.reload()
    console.clear()
  }

  





}
