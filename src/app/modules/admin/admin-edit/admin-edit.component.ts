import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {

  id:any;
  data:any;
  EditForm:FormGroup;

  constructor(private route:ActivatedRoute, private api:ApiService, private fb:FormBuilder, private router:Router){

this.EditForm=fb.group({
  id:['',[Validators.required]],
  model:['',[Validators.required]],
  name:['',[Validators.required]],
  photo:['',[Validators.required]],
  description:['',[Validators.required]],
  type:['',[Validators.required]],
  transmission:['',[Validators.required]],
  color:['',[Validators.required]],
  year:['',[Validators.required]],
  seat:['',[Validators.required]],
  kilometer:['',[Validators.required]],
  price:['',[Validators.required]]
})




  }

  ngOnInit(): void {

    this.route.params.subscribe((res:any)=>{
      this.id=res.id
      this.api.getsingledetails(this.id).subscribe(res=>{
        this.data=res
        console.log(this.data);
        
        this.EditForm.patchValue({
           id:this.data.id,
           model:this.data.model,
           name:this.data.name,
           photo:this.data.photo,
           description:this.data.description,
           type:this.data.type,
           transmission:this.data.transmission,
           color:this.data.color,
           year:this.data.year,
           seat:this.data.seat,
           kilometer:this.data.kilometer,
           price:this.data.price
        })
      })
    })

  }

  async Submit(_id:any){
    const data =this.EditForm.value
    const id= this.data._id

    this.api.editDetails(id,data).subscribe({
      next:(res:any)=>{
        console.log(res);
        console.log('success');
        this.router.navigateByUrl('/admin')
        
      },error:(err:any)=>{
        console.log(err);
        
      }
    })
  }



}
