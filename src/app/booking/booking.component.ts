import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { User } from '../authorizer/interface/user';
import { UserInfoProviderService } from '../authorizer/services/userInfoProviderService';
import { BookingService } from './services/booking.service';

export interface BookingModel {
  End: string;
  ServiceProviderName: string;
  Start: string;
  UserName: string;
};

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  displayedColumns: string[] = ['UserName', 'ServiceProviderName', 'Start', 'End'];
  customerInfo !: User;
  dataSource: any;
  showLoader = false;

  constructor(
    private readonly userInfoProviderService: UserInfoProviderService,
    private readonly bookingService: BookingService
  ) { }

  ngOnInit(): void {
    this.showLoader = true
    this.customerInfo = this.userInfoProviderService.getCurrentUserInfo();
    const dataSource: any = []
    if(this.customerInfo.userType === "ServiceProvider") {
      this.bookingService.getServiceProviderBookings(this.customerInfo.email).subscribe((resp: any) =>{
        resp.Bookings.forEach((element: any) => {
          dataSource.push({
            UserName: element.UserName,
            Start: moment(element.Start).format("MMM DD YYYY HH:mm:ss"),
            End: moment(element.End).format("MMM DD YYYY HH:mm:ss"),
            ServiceProviderName: element.ServiceProviderName
          })
        })
        this.dataSource = dataSource;
        this.showLoader = false;
      });
    } else {
      this.bookingService.getCustomerBookings(this.customerInfo.email).subscribe((resp: any) =>{
        resp.Bookings.forEach((element: any) => {
          dataSource.push({
            UserName: element.UserName,
            Start: moment(element.Start).format("MMM DD YYYY HH:mm:ss"),
            End: moment(element.End).format("MMM DD YYYY HH:mm:ss"),
            ServiceProviderName: element.ServiceProviderName
          })
        })
        this.dataSource = dataSource;
        this.showLoader = false;
      });
    }
  }

}
