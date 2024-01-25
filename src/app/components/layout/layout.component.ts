import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/hotel';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  loggedUserData?: IUser;
  constructor(private router:Router){
    const localData = localStorage.getItem('hotelUser');
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  ngOnInit(): void {

  }

  onLogoff(){
    localStorage.removeItem('hotelUser');
    this.loggedUserData=undefined;
    this.router.navigateByUrl('/login');
  }


}
