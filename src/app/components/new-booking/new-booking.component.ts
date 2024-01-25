import { Component, OnInit } from '@angular/core';
import { IBooking, IGuest, IRoom } from 'src/app/models/hotel';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.css']
})
export class NewBookingComponent implements OnInit{

  roomList:IRoom[]=[];

  bookingObj:IBooking={
    "name": "",
    "mobileNo": "",
    "email": "",
    "aadharNo": "",
    "city": "",
    "address": "",
    "bookingId": 0,
    "roomId": 0,
    "customerId": 0,
    "bookingFromDate": "",
    "bookingToDate": "",
    "createdDate": new Date(),
    "bookingRate": 0,
    "naration": "",
    "createdBy": 0,
    "hotelBookingDetails": [
 
    ]
  };

  guestObj:IGuest = {
    "bookingDetailId": 0,
    "bookingId": 0,
    "customerName": "",
    "aadharCardNo": ""

  }

  constructor(private roomSrv:RoomService){

  }

  ngOnInit(): void {
    this.loadRoom();
  }

  loadRoom(){
    this.roomSrv.getAllRooms().subscribe((res:any)=>{
      this.roomList = res.data;
    })
  }

  addGuest(){
    const obj = JSON.stringify(this.guestObj);
    const parseObj = JSON.parse(obj);
    this.bookingObj.hotelBookingDetails.unshift(parseObj);
  }

  removeGuest(index:number){
    this.bookingObj.hotelBookingDetails.splice(index,1);
  }

  onSave(){
    debugger;
    this.roomSrv.createBooking(this.bookingObj).subscribe((res:any)=>{
      if(res.result){
        alert('Created Successfully');
      }else{
        alert(res.message);
      }
    })
  }

}
