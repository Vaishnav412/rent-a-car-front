import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userbooking'
})
export class UserbookingPipe implements PipeTransform {

  transform(allBookings: any[], searchTerm:string,property:string ): any[]{

    let result:any=[]
    if (!allBookings||searchTerm===""||property===""){
      return allBookings
    } else{
      allBookings.forEach((item:any)=>{
        if(item[property].trim().toLowerCase().includes(searchTerm.trim().toLowerCase())){
          result.push(item)
        }
      })
    }
    return result;
  }

}
