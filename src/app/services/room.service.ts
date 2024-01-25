import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBooking, ICustomer, ILogin, IResponseModel, IRoom, IUser } from '../models/hotel';
import { environment } from 'src/environments/environment';
import { CONSTANT } from '../constants/constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http:HttpClient) { }

  login(obj:ILogin):Observable<IResponseModel>{
    return this.http.post<IResponseModel>(environment.APIENDPOINT+CONSTANT.ENDPOINT.LOGIN,obj);
  }
  getAllRooms():Observable<IResponseModel>{
    return this.http.get<IResponseModel>(environment.APIENDPOINT+CONSTANT.ENDPOINT.GETALLROOMS);
  }
  saveUpdateRoom(obj:IRoom[]):Observable<IResponseModel>{
    return this.http.post<IResponseModel>(environment.APIENDPOINT+CONSTANT.ENDPOINT.ADDUPDATEBULKROOMS,obj);
  }
  deleteRoom(id:number){
    return this.http.delete(environment.APIENDPOINT+CONSTANT.ENDPOINT.DELETEROOMBYID+id)
  }
  getAllCustomer():Observable<IResponseModel>{
    return this.http.get<IResponseModel>(environment.APIENDPOINT+CONSTANT.ENDPOINT.GETALLCUSTOMER);
  }
  saveUpdateCustomer(obj:ICustomer):Observable<IResponseModel>{
    return this.http.post<IResponseModel>(environment.APIENDPOINT+CONSTANT.ENDPOINT.ADDUPDATECUSTOMER,obj);
  }
  deleteCustomer(id:number):Observable<IResponseModel>{
    return this.http.delete<IResponseModel>(environment.APIENDPOINT+CONSTANT.ENDPOINT.DELETECUSTOMERBYID+id)
  }
  getAllUser():Observable<IResponseModel>{
    return this.http.get<IResponseModel>(environment.APIENDPOINT+CONSTANT.ENDPOINT.GETALLUSER);
  }
  saveUpdateUser(obj:IUser):Observable<IResponseModel>{
    return this.http.post<IResponseModel>(environment.APIENDPOINT+CONSTANT.ENDPOINT.ADDUPDATEUSER,obj);
  }
  deleteUser(id:number):Observable<IResponseModel>{
    return this.http.delete<IResponseModel>(environment.APIENDPOINT+CONSTANT.ENDPOINT.DELETEUSERBYID+id)
  }
  getRoomByMonth(id:number):Observable<IResponseModel>{
    return this.http.get<IResponseModel>(environment.APIENDPOINT+CONSTANT.ENDPOINT.GETROOMBYMONTH+id);
  }
  createBooking(obj:IBooking):Observable<IResponseModel>{
    return this.http.post<IResponseModel>(environment.APIENDPOINT+CONSTANT.ENDPOINT.BOOKROOM,obj);
  }
  getAllBooking():Observable<IResponseModel>{
    return this.http.get<IResponseModel>(environment.APIENDPOINT+CONSTANT.ENDPOINT.GETALLBOOKING);
  }

  
}
