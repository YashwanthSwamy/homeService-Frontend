import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { User } from '../authorizer/interface/user';
import { UserInfoProviderService } from '../authorizer/services/userInfoProviderService';
import { HomepageService } from './services/homepage.service';

export interface customerBookModel {
  Name: string;
  Email: string;
  Start: string;
  End: string;
  PhoneNumber: string;
}

export interface serviceProviderSlotsModel {
  BookingID: string;
  Start: string;
  End: string;
  Booked: string;
}

export interface serviceProviderModel {
  email: string;
  name: string;
  offeredService: string;
  phoneNumber: string;
  userType: string;
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  serviceProviderSlotColumns: string[] = ['BookingID', 'Start', 'End', "Booked"];
  customerColumns: string[] = ['Name', 'Email', 'PhoneNumber', 'Start', 'End', "Book"];
  carpenterDataSource!: customerBookModel[];
  plumberDataSource!: customerBookModel[];
  hairStylistDataSource!: customerBookModel[];
  serviceProviderDataSource!: serviceProviderSlotsModel[];
  customer_info!: User;
  isServiceProvider = false;
  public invalidDatesErrorFlag!: boolean;
  public fromDate!: Date;
  public toDate!: Date;
  public minDate = new Date();
  
  constructor(
    private readonly userInfoProviderService: UserInfoProviderService,
    private readonly homepageService: HomepageService
  ) { }

  ngOnInit(): void {
    this.serviceProviderDataSource = [
      { BookingID: "1", Start: "abc", End: 'abc@abc.com', Booked: "Booked"},
    ]
    this.customer_info = this.userInfoProviderService.getCurrentUserInfo();
    if (this.customer_info.userType === "Service Provider") {
      this.homepageService.getServiceProviderSlots(this.customer_info.email).subscribe(resp => {
        console.log("SP Slots", resp);
      });
      this.isServiceProvider = true;
    } 
    else{
      this.setCustomerTableData()
    }
  }

  AddSlots() {}

  book(ele: any){
    console.log(ele)
  }

  setCustomerTableData(){
    
    this.homepageService.getServiceOfferedInfo().subscribe((serviceOffered: any) => {
      console.log("Service Offered", serviceOffered);
      const carpenterDataSource: any=  [];
      const plumberDataSource: any =  [];
      const hairStylistDataSource: any =  [];
      this.homepageService.getSlots(this.customer_info.email).subscribe((resp: any) => {
        // console.log("Slot", resp);
        resp.Slots.forEach((element: any) => {
          const user = serviceOffered.find((ele:any) => ele.email === element.ServiceProviderID);
          if (user){
            switch(user.offeredService){
              case "Carpenter":
                carpenterDataSource.push({
                  Name: user.name,
                  Start: element.Start,
                  End: element.End,
                  Email: user.email,
                  PhoneNumber: user.phoneNumber,
                  Book: element.Booked
                });
                break;
              case "Plumber":
                plumberDataSource.push({
                  Name: user.name,
                  Start: element.Start,
                  End: element.End,
                  Email: user.email,
                  PhoneNumber: user.phoneNumber,
                  Book: element.Booked
                });
                break;
              case "Hair Stylist":
                hairStylistDataSource.push({
                  Name: user.name,
                  Start: element.Start,
                  End: element.End,
                  Email: user.email,
                  PhoneNumber: user.phoneNumber,
                  Book: element.Booked
                });
                break;
            }
          }
        });
        this.carpenterDataSource = carpenterDataSource;
        this.plumberDataSource = this.plumberDataSource;
        this.hairStylistDataSource = hairStylistDataSource
      });
    });
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
