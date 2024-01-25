import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/models/hotel';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginObj:ILogin = {
    "phone":"",
    "password":""
  }

  constructor(private roomSrv:RoomService,private router :Router){}

  ngOnInit(): void {
    
  }

  onLogin(){
    debugger;
    this.roomSrv.login(this.loginObj).subscribe((res:any)=>{
      if(res.result) {
        localStorage.setItem('hotelUser',JSON.stringify(res.data));
        this.router.navigateByUrl('/dashboard');
      }else{
        alert('Wrong user credentials')
      } 
    })
  }

}
