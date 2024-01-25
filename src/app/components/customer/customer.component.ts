import { Component, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/models/hotel';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerList:ICustomer[]=[];
  customerObj:ICustomer = {
    "custId": 0,
    "name": " ",
    "mobileNo": "",
    "email": "",
    "aadharNo": "",
    "city": "",
    "address": ""

  }
  constructor(private roomSrv:RoomService){}

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer(){
    this.roomSrv.getAllCustomer().subscribe((res:any)=>{
      if(res.result){
        this.customerList=res.data;
        console.log(this.customerList);
      }
    })
  }
  onEdit(data:any){
    const strObj = JSON.stringify(data);
    this.customerObj = JSON.parse(strObj);
  }

  saveCustomer(){
    this.roomSrv.saveUpdateCustomer(this.customerObj).subscribe((res:any)=>{
      if(res.result){
        alert('Updated successfully');
        this.getCustomer();
      }else{
        alert(res.message);
      }
    })
  
  }
  onDelete(id:number){
    this.roomSrv.deleteCustomer(id).subscribe((res:any)=>{
      if(res.result){
        alert("Deleted Successfully");
        this.getCustomer();
      }else{
        alert(res.message);
      }
    })

  }
}
