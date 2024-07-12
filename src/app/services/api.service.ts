import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  SERVER_URL='http://localhost:3000'

  constructor( private http:HttpClient) { }



  // register api

  registerApi=(user:any)=>{
     return this.http.post(`${this.SERVER_URL}/user/register`,user)
  }

  // login api

  loginApi=(user:any)=>{
    return this.http.post(`${this.SERVER_URL}/user/login`,user)
  }

  // admin login api

  adminLoginApi=(admin:any)=>{
    return this.http.post(`${this.SERVER_URL}/admin/login`,admin)
  }

  // add api call

  addDetails=(rest:any)=>{
  return  this.http.post(`${this.SERVER_URL}/details/add`,rest)
  }

  // get api call
  getAlldetails=()=>{
    return this.http.get(`${this.SERVER_URL}/details/getall`)
  }

  // get single view api

  getsingledetails=(id:any)=>{
     return this.http.get(`${this.SERVER_URL}/details/view/${id}`)
  }

  getsingleuser=(email:any)=>{
    return this.http.get(`${this.SERVER_URL}/user/single/${email}`)
  }

  getAsingle_id=(userid:any)=>{
    return this.http.get(`${this.SERVER_URL}/user/single/view/${userid}`)
  }


  // edit details api
  editDetails=(id:any,data:any)=>{
    return this.http.put(`${this.SERVER_URL}/edit/${id}`,data)
  }
  
  // delete api

  deleteDetails=(_id:any)=>{
    return this.http.delete(`${this.SERVER_URL}/details/delete/${_id}`)
  }

  // add to wishlist

  addToWishlist=(rest:any)=>{
    return this.http.post(`${this.SERVER_URL}/user/wishlist`,rest)
  }

  // get wishlist

  allwishlist=()=>{
    return this.http.get(`${this.SERVER_URL}/user/get-wishlist`)
  }

  // delete wishlist

  cancelwishlist=(_id:any)=>{
    return this.http.delete(`${this.SERVER_URL}/user/deletewishlist/${_id}`)
  }

  // addbooking
  addBooking=(book:any)=>{
    return this.http.post(`${this.SERVER_URL}/booking/add`,book)
  }
  //  cancelbooking
  cancelBooking=(_id:any)=>{
    return this.http.delete(`${this.SERVER_URL}/booking/delete/${_id}`)
  }

  // allbookings

  allBookings=()=>{
    return this.http.get(`${this.SERVER_URL}/mybookings`)
  }
}
