import { Component, OnInit } from '@angular/core';
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
    if(this.customerInfo.userType === "Service Provider") {
      this.bookingService.getServiceProviderBookings(this.customerInfo.email).subscribe((resp: any) =>{
        this.dataSource = resp.Bookings;
        this.showLoader = false;
      });
    } else {
      this.bookingService.getCustomerBookings(this.customerInfo.email).subscribe((resp: any) =>{
        this.dataSource = resp.Bookings;
        this.showLoader = false;
      });
    }
  }

}
