import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingCalenderComponent } from './components/booking-calender/booking-calender.component';
import { BookingListComponent } from './components/booking-list/booking-list.component';
import { CustomerComponent } from './components/customer/customer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { NewBookingComponent } from './components/new-booking/new-booking.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { UsersComponent } from './components/users/users.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    BookingCalenderComponent,
    BookingListComponent,
    CustomerComponent,
    DashboardComponent,
    LayoutComponent,
    LoginComponent,
    NewBookingComponent,
    RoomsComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
