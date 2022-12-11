import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { User } from '../authorizer/interface/user';
import { UserInfoProviderService } from '../authorizer/services/userInfoProviderService';

export interface customerBookModel {
  Name: string;
  Email: string;
  PhoneNumber: string;
}

export interface serviceProviderSlotsModel {
  BookingID: string;
  Start: string;
  End: string;
  Booked: string;
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  serviceProviderSlotColumns: string[] = ['BookingID', 'Start', 'End', "Booked"];
  customerColumns: string[] = ['Name', 'Email', 'PhoneNumber', "Book"];
  carpenterDataSource!: customerBookModel[];
  plumberDataSource!: customerBookModel[];
  hairStylistDataSource!: customerBookModel[];
  serviceProviderDataSource!: serviceProviderSlotsModel[];
  customer_info!: User;
  isServiceProvider = true;
  public invalidDatesErrorFlag!: boolean;
  public fromDate!: Date;
  public toDate!: Date;
  public minDate = new Date();
  
  constructor(
    private readonly userInfoProviderService: UserInfoProviderService
  ) { }

  ngOnInit(): void {
    this.carpenterDataSource = [
      { Name: "Carpenter", Email: 'carpenter@gmail.com', PhoneNumber: "123456789"},
    ];
    this.plumberDataSource = [
      { Name: "Plumber", Email: 'plumber@gmail.com', PhoneNumber: "123456789"},
    ];
    this.hairStylistDataSource = [
      { Name: "Hair Stylist", Email: 'hairstylist@gmail.com', PhoneNumber: "123456789"},
    ];
    this.serviceProviderDataSource = [
      { BookingID: "1", Start: "abc", End: 'abc@abc.com', Booked: "Booked"},
    ]
    this.customer_info = this.userInfoProviderService.getCurrentUserInfo();
    if (this.customer_info.userType === "Service Provider"){
      this.isServiceProvider = true
    }
  }

  AddSlots() {}

  book(ele: any){
    console.log(ele)
  }

  dateChangeEventHandler = () => {
    this.invalidDatesErrorFlag = false;
    if (this.toDate && this.fromDate) {
      if (moment(this.fromDate).isAfter(this.toDate)) {
        this.invalidDatesErrorFlag = true;
      }
    }
  };

}
