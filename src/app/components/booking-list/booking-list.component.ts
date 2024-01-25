import { Component, OnInit } from '@angular/core';
import { IBooked } from 'src/app/models/hotel';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  bookingList:IBooked[]=[];

  constructor(private roomSrv:RoomService){}

  ngOnInit(): void {
    this.getallBookedRoom();
  }

  getallBookedRoom(){
    this.roomSrv.getAllBooking().subscribe((res:any)=>{
      if(res.result){
        this.bookingList = res.data;
      }else{
        console.log(res.message);
      }
    })
  }

}
