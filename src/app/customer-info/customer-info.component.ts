import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../authorizer/interface/user';
import { UserInfoProviderService } from '../authorizer/services/userInfoProviderService';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss']
})
export class CustomerInfoComponent implements OnInit {
  hide = true
  customer_info !: User;
  constructor(
    private router: Router,
    private userInfoProviderService: UserInfoProviderService
    ) { }

  ngOnInit(): void {
    this.customer_info = this.userInfoProviderService.getCurrentUserInfo();
  }

  updateClicked(){
    this.router.navigateByUrl('/update');
  }
}
