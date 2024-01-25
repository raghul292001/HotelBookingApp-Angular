export interface IResponseModel {
    message: string
    result: boolean
    data: any
}

export interface ILogin {
    phone: string
    password: string
}

export interface IUser {
    userId:number
    userName: string
    password: string
    role: string
}

export interface IRoom{
    roomId: number;
    roomName: string;
    isAcAvailable: boolean;
    roomCapacity: number;
    isActive: boolean;
    roomTariff: number;
    extensionNo: string;
}

export interface ICustomer {
    custId: number
    name: string
    mobileNo: string
    email: string
    aadharNo: string
    city: string
    address: string
}

export interface IBooking {
    name: string
    mobileNo: string
    email: string
    aadharNo: string
    city: string
    address: string
    bookingId: number
    roomId: number
    customerId: number
    bookingFromDate: string
    bookingToDate: string
    createdDate: Date
    bookingRate: number
    naration: string
    createdBy: number
    hotelBookingDetails: IGuest[]
}

export interface IGuest {
    bookingDetailId: number
    bookingId: number
    customerName: string
    aadharCardNo: string
  }

export interface IBooked {
    bookingFromDate: string
    bookingToDate: string
    bookingId: number
    bookingRate: number
    userName: string
    naration: string
    name: string
    mobileNo: string
    passengerName: string
    
}