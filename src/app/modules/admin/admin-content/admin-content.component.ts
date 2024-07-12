import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin-content',
  templateUrl: './admin-content.component.html',
  styleUrls: ['./admin-content.component.css']
})
export class AdminContentComponent implements OnInit {

  getAlldetails:any=[]

  constructor(private api:ApiService){}
  ngOnInit(): void {

    this.getAlldetailsapi()

  }

  getAlldetailsapi=()=>{
    this.api.getAlldetails().subscribe({
      next:(res:any)=>{
        console.log(res);

        this.getAlldetails=res
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }



  // delete details

  deleteDet(_id:any){
    this.api.deleteDetails(_id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.getAlldetailsapi()
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

}






