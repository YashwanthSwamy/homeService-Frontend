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
    this.showLoader = true;
    const customer_id = this.loginForm.get("userName")?.value;
    const password = this.loginForm.get("password")?.value
    this.loginService.getCustomerInfo(customer_id, password).subscribe((response: any) => {
      if (response) {
        this.showLoader = false;
        this.router.navigateByUrl('/homepage');
        localStorage.setItem("currentUser", JSON.stringify(response))
      }
    });
  }
}
