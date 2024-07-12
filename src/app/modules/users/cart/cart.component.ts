import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  allwishlist:any={}
  searchkey:any={}

  constructor(private api:ApiService,private route:ActivatedRoute){}
  ngOnInit(): void {

    this.route.params.subscribe((res:any)=>{
      const {userId}=res

      this.api.getAsingle_id(userId).subscribe({
        next:(res:any)=>{
          this.searchkey=res.email
          console.log(this.searchkey);
          
        },
        error:(err:any)=>{
          console.log(err);
          
        }
      })
    })

       this.getAllwishlist()
  }

  

  getAllwishlist=()=>{


    this.api.allwishlist().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.allwishlist=res
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

  canwish(_id:any){
    this.api.cancelwishlist(_id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.getAllwishlist()
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

}


