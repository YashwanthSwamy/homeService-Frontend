import { Component, OnInit } from '@angular/core';
import { User } from '../authorizer/interface/user';
import { UserInfoProviderService } from '../authorizer/services/userInfoProviderService';

export interface BookingModel {
  End: string;
  ServiceProviderName: string;
  Start: string;
  UserName: string;
};

const ELEMENT_DATA: BookingModel[] = [
  {
      End: "Sat, 10 Dec 2022 03:45:45 GMT",
      ServiceProviderName: "xyz",
      Start: "Sat, 10 Dec 2022 03:45:45 GMT",
      UserName: "abc"
  },
  {
      End: "Sat, 10 Dec 2022 03:45:45 GMT",
      ServiceProviderName: "xyz",
      Start: "Sat, 10 Dec 2022 03:45:45 GMT",
      UserName: "abc"
  }
];

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  displayedColumns: string[] = ['UserName', 'ServiceProviderName', 'Start', 'End'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
