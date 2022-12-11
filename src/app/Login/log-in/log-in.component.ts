import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  loginForm!: FormGroup;
  hidePassword = true;
  showLoader = false;
  customer_info: any;
  constructor(
    private router: Router,
    private readonly formBuilder: FormBuilder,
    private readonly loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ["", [Validators.required, this.validateEmptyValue]],
      password: ["", [Validators.required, this.validateEmptyValue]],
      invalidCreds: [""],
    });
  }

  registerClicked() {
    this.router.navigateByUrl('/register');
  }

  validateEmptyValue(control: AbstractControl) {
    if (control.value === " ") {
      return { invalidUrl: true };
    }
    return null;
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }
    const customer_id = this.loginForm.get("userName")?.value;
    const body = {
      password: this.loginForm.get("password")?.value
    }
    // this.loginService.getCustomerInfo(customer_id, body).toPromise().then((response: any) => {
    //   if (response) {
    //     this.customer_info = response;
    //   }
    // });
    this.customer_info = {
      "name": "customer_1",
      "email": "abcd@abcd.com",
      "phoneNumber": 1234567890,
      "houseNumber": "123",
      "street": "abc",
      "city": "abc",
      "state": "abc",
      "country": "abc",
      "pinCode": 1234,
      "userType": "Customer",
      "offeredService": null
  }
    console.log("customer_info", this.customer_info)
    localStorage.setItem("currentUser", JSON.stringify(this.customer_info))
    if (this.customer_info != null){
      this.router.navigateByUrl('/homepage');
    }
  }
}
