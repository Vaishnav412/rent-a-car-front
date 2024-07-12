import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  loginForm=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  // navigation:any={}
  // singleuser:any={}
  userId:any={}
  userEmail:any={}
  username:any={}

  constructor(private fb:FormBuilder,private api:ApiService, private route:Router){}

  // login
  login(){
    if(this.loginForm.valid){
      const email=this.loginForm.value.email
      const password=this.loginForm.value.password

      console.log(`${email} ${password}`);

      const reqbody={email,password}

      // api call

      this.api.loginApi(reqbody).subscribe({
        next:(res:any)=>{
          console.log(res);
          this.userId=res.existingUser._id
          console.log(this.userId);
          this.userEmail=res.existingUser.email
          this.username=res.existingUser.username


          this.route.navigateByUrl(`/users/${this.userId}`)

          localStorage.setItem("userEmail",this.userEmail)

          localStorage.setItem('userId',this.userId)

          localStorage.setItem("username",this.username)

        
          },error:(err:any)=>{
          console.log(err);
          
          
        }

      })

      // admin
      this.api.adminLoginApi(reqbody).subscribe({
        next:(res:any)=>{
          console.log(res);
          this.route.navigateByUrl('/admin')
        },error:(err:any)=>{
          console.log(err);
        }
      }) }
    else{
      alert('please check the email or password')
    }
  }
}
