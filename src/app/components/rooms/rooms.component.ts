import { Component, OnInit } from '@angular/core';
import { IRoom } from 'src/app/models/hotel';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  constructor(private roomSrv:RoomService){}
  roomList:IRoom[]=[];
  ngOnInit(): void {
    this.getALLRoom();    
  }

  getALLRoom(){
    this.roomSrv.getAllRooms().subscribe((res:any)=>{
      this.roomList = res.data;
      console.log(this.roomList);
    })
  }

  addNewRoom(){
    const roomObj = {
      "roomId": 0,
      "roomName": "",
      "isAcAvailable": false,
      "roomCapacity": 0,
      "isActive": false,
      "roomTariff": 0,
      "extensionNo": ""
    }
    this.roomList.unshift(roomObj);
  }
  saveRoom(){
    this.roomSrv.saveUpdateRoom(this.roomList).subscribe((res:any)=>{
      if(res.result){
        alert('Data Updated successfully')
      }else{
        alert(res.message);
      }      
    })

  }

  onDelete(id:number){
    this.roomSrv.deleteRoom(id).subscribe((res:any)=>{
      if(res.result){
        alert('Room Deleted Successfully');
        this.getALLRoom();
      }else{
        alert(res.message);
      }
    })

  }

}
