import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/hotel';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userList:IUser[]=[];
  userObj = {
    "userId": 0,
      "userName": "",
      "password": "",
      "role": ""
  }

  constructor(private roomSrv:RoomService){}

  ngOnInit(): void {
    this.getUser();
  }
  getUser(){
    this.roomSrv.getAllUser().subscribe((res:any)=>{
      if(res.result){
        this.userList=res.data;
        console.log(this.userList);
      }
    })
  }
  addNewUser(){

  }
  saveUser(){
  this.roomSrv.saveUpdateUser(this.userObj).subscribe((res:any)=>{
    if(res.result){
      alert("User Created SuccessFully");
      this.getUser();

    }else{
      alert(res.message);
    }
  })
  }

  onEdit(data:any){
    const strObj = JSON.stringify(data);
    this.userObj = JSON.parse(strObj);
  }
  onDelete(id:number){
    const isDelety = confirm('Are you sure want to delete');
    if(isDelety){
      this.roomSrv.deleteUser(id).subscribe((res:any)=>{
        if(res.result){
          alert("Deleted Successfully");
          this.getUser();
        }else{
          alert(res.message);
        }
      })
    }
  }

}
