import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent {

  

  AddForm=this.fb.group({
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
  

  constructor(private fb:FormBuilder, private api:ApiService , private route:Router){}
  add(){
    if(this.AddForm.valid){
      const id=this.AddForm.value.id
      const model=this.AddForm.value.model
      const name=this.AddForm.value.name
      const photo=this.AddForm.value.photo
      const description=this.AddForm.value.description
      const type=this.AddForm.value.type
      const transmission=this.AddForm.value.transmission
      const color=this.AddForm.value.color
      const year=this.AddForm.value.year
      const seat=this.AddForm.value.seat
      const kilometer=this.AddForm.value.kilometer
      const price=this.AddForm.value.price

      console.log(`${id} ${model} ${name} ${photo} ${description} ${type} ${transmission} ${color} ${year} ${seat} ${kilometer} ${price}`);

      const reqbody={id,model,name,photo,description,type,transmission,color,year,seat,kilometer,price}

      this.api.addDetails(reqbody).subscribe({
        next:(res:any)=>{
          console.log(res);
          this.route.navigateByUrl('admin')
          
        },error:(err:any)=>{
          console.log(err);
          
        }
      })
      
    }else{
      alert('please fill the form')
    }
  }

}
