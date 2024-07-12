import { OnInit, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wishlist'
})
export class WishlistPipe implements PipeTransform{



  transform(allwishlist: any[], searchTerm: string,property:string): any[]{

    let result:any=[]
    if (!allwishlist||searchTerm===""||property===""){
      return allwishlist
    }else{
      allwishlist.forEach((item:any)=>{
        if(item[property].trim().toLowerCase().includes(searchTerm.trim().toLowerCase())){
           result.push(item)
        }
      })
    }
    localStorage.setItem("wishlist",result.length)
    
    return result;
  }
  

}
