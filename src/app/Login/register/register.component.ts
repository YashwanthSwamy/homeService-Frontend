import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  roles: any = ['Customer', 'Service Provider'];
  services: any = ['Carpenter', 'Plumber', "Hair Stylist"];
  hide = true;
  showLoader = false
  registerForm!: FormGroup;

  constructor(
    private router: Router,
    private readonly formBuilder: FormBuilder,
    private readonly registerService: RegisterService,
    private readonly _snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ["", [Validators.required, this.validateEmptyValue]],
      email: ["", [Validators.required, this.validateEmptyValue]],
      phoneNumber: ["", [Validators.required, this.validateEmptyValue]],
      userType: ["", [Validators.required, this.validateEmptyValue]],
      offeredService: [""],
      houseNumber: ["", [Validators.required, this.validateEmptyValue]],
      street: ["", [Validators.required, this.validateEmptyValue]],
      city: ["", [Validators.required, this.validateEmptyValue]],
      state: ["", [Validators.required, this.validateEmptyValue]],
      country: ["", [Validators.required, this.validateEmptyValue]],
      pinCode: ["", [Validators.required, this.validateEmptyValue]],
      password: ["", [Validators.required, this.validateEmptyValue]],
    });
  }

  loginClicked() {
    this.router.navigateByUrl('/login');
  }

  register() {
    if (this.registerForm.invalid) {
      return;
    }
    this.showLoader = true;
    const customer_info = {
      name: this.registerForm.get("name")?.value,
      email: this.registerForm.get("email")?.value,
      password: this.registerForm.get("password")?.value,
      phoneNumber: this.registerForm.get("phoneNumber")?.value,
      houseNumber: this.registerForm.get("houseNumber")?.value,
      street: this.registerForm.get("street")?.value,
      city: this.registerForm.get("city")?.value,
      state: this.registerForm.get("state")?.value,
      country: this.registerForm.get("country")?.value,
      pinCode: this.registerForm.get("pinCode")?.value,
      userType: this.registerForm.get("userType")?.value === 'Service Provider' ? "ServiceProvider" : this.registerForm.get("userType")?.value,
      offeredService: this.registerForm.get("userType")?.value === 'Service Provider' ? this.registerForm.get("offeredService")?.value : null
    }
    this.registerService.addCustomer(customer_info).toPromise()
    .then(resp => {
      this.showLoader = false;
      this.router.navigateByUrl('/login');
    })
    .catch(err => {
      this.showLoader = false;
      this.openSnackBar("Failed to Add User Try Again!!", "Close");
    });
  }

  validateEmptyValue(control: AbstractControl) {
    if (control.value === " ") {
      return { invalidUrl: true };
    }
    return null;
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
