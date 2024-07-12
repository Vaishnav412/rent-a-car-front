import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin-content-single',
  templateUrl: './admin-content-single.component.html',
  styleUrls: ['./admin-content-single.component.css']
})
export class AdminContentSingleComponent implements OnInit {

  details:any=[]

  constructor(private api:ApiService, private activated:ActivatedRoute){}

  ngOnInit(): void {

    this.activated.params.subscribe((data:any)=>{
      console.log(data);

      const{id}=data

      console.log(id);

      this.getsingleDetails(id)
      
      
    })

  }



  getsingleDetails=(id:any)=>{
    this.api.getsingledetails(id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.details=res
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }



}
