import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { User } from '../authorizer/interface/user';
import { UserInfoProviderService } from '../authorizer/services/userInfoProviderService';
import { HomepageService } from './services/homepage.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

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
  addSlotForm!: FormGroup;
  showAddSlotLoader = false

  public invalidDatesErrorFlag!: boolean;
  public fromDate!: Date;
  public toDate!: Date;
  public minDate = new Date();
  
  constructor(
    private readonly userInfoProviderService: UserInfoProviderService,
    private readonly homepageService: HomepageService,
    private readonly formBuilder: FormBuilder,
    private readonly _snackBar: MatSnackBar,
    private readonly dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.addSlotForm = this.formBuilder.group({
      from: ["", [Validators.required, this.validateEmptyValue]],
      to: ["", [Validators.required, this.validateEmptyValue]],
      invalidCreds: [""],
    });

    this.customer_info = this.userInfoProviderService.getCurrentUserInfo();
    if (this.customer_info.userType === "ServiceProvider") {
      this.setServiceProviderTableData();
    } 
    else{
      this.setCustomerTableData();
    }
  }

  setServiceProviderTableData(){
    this.homepageService.getServiceProviderSlots(this.customer_info.email).subscribe((resp: any) => {
      const serviceProviderDataSource: any = []
      resp.Slots.forEach((element: any) => {
        serviceProviderDataSource.push({
          BookingID: element.ID,
          Start: moment(element.Start).format("MMM DD YYYY HH:mm:ss"),
          End: moment(element.End).format("MMM DD YYYY HH:mm:ss"),
          Booked: element.Booked ? "Booked" : "Open"
        })
      })
      this.serviceProviderDataSource = serviceProviderDataSource;
    });
    this.isServiceProvider = true;
  }

  validateEmptyValue(control: AbstractControl) {
    if (control.value === " ") {
      return { invalidUrl: true };
    }
    return null;
  }

  AddSlots() {
    if (this.addSlotForm.invalid) {
      return;
    }
    this.showAddSlotLoader = true;
    const from = this.addSlotForm.get("from")?.value;
    const to = this.addSlotForm.get("to")?.value
    const slotInfo = {
      ServiceProviderName: this.customer_info.name,
      Start:  moment(from).toISOString(),
      End: moment(to).toISOString(),
      Booked: false
    }
    this.homepageService.addSlots(this.customer_info.email, slotInfo).toPromise()
    .then(resp => {
      this.openSnackBar("Slot Added Successfully", "Close");
      this.setServiceProviderTableData();
      this.showAddSlotLoader = false;
    })
    .catch(err => {
      this.openSnackBar("Failed to Add Slot Try Again!!", "Close");
      this.showAddSlotLoader = false;
    });
  }

  book(bookingInfo: any){
    this.openDialog(bookingInfo);
  }

  openDialog(bookingInfo: any): void {
    const dialogRef = this.dialog.open(BookingConfirmationDialog, {
      width: '500px',
      data: {...bookingInfo},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == "book"){
        this.makeBooking(bookingInfo);
      }
    });
  }

  makeBooking(bookingInfo: any){
    const slotInfo = {
      ID: bookingInfo.BookingID,
      CustomerName: this.customer_info.name,
      Booked: true
    }
    this.homepageService.bookSlot(this.customer_info.email, slotInfo).toPromise()
    .then(resp => {
      this.openSnackBar("Booking Successfully", "Close");
    })
    .catch(err => {
      this.openSnackBar("Booking Failed", "Close");
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  setCustomerTableData(){
    this.homepageService.getServiceOfferedInfo().subscribe((serviceOffered: any) => {
      console.log("Service Offered", serviceOffered);
      const carpenterDataSource: any=  [];
      const plumberDataSource: any =  [];
      const hairStylistDataSource: any =  [];
      this.homepageService.getSlots(this.customer_info.email).subscribe((resp: any) => {
        resp.Slots.forEach((element: any) => {
          const user = serviceOffered.find((ele:any) => ele.email === element.ServiceProviderID);
          if (user){
            switch(user.offeredService){
              case "Carpenter":
                carpenterDataSource.push({
                  BookingID: element.ID,
                  Name: user.name,
                  Start: moment(element.Start).format("MMM DD YYYY HH:mm:ss"),
                  End: moment(element.End).format("MMM DD YYYY HH:mm:ss"),
                  Email: user.email,
                  PhoneNumber: user.phoneNumber,
                  Book: element.Booked
                });
                break;
              case "Plumber":
                plumberDataSource.push({
                  BookingID: element.ID,
                  Name: user.name,
                  Start: moment(element.Start).format("MMM DD YYYY HH:mm:ss"),
                  End: moment(element.End).format("MMM DD YYYY HH:mm:ss"),
                  Email: user.email,
                  PhoneNumber: user.phoneNumber,
                  Book: element.Booked
                });
                break;
              case "Hair Stylist":
                hairStylistDataSource.push({
                  BookingID: element.ID,
                  Name: user.name,
                  Start: moment(element.Start).format("MMM DD YYYY HH:mm:ss"),
                  End: moment(element.End).format("MMM DD YYYY HH:mm:ss"),
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

@Component({
  selector: 'booking-confirmation-dialog',
  templateUrl: 'booking-confirmation-dialog.html',
})
export class BookingConfirmationDialog {
  constructor(
    public dialogRef: MatDialogRef<BookingConfirmationDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  closeDialog(response: any) {
    this.dialogRef.close(response);
  }

  makeBooking(){
    this.closeDialog({
      event: "book",
    });
  }

}