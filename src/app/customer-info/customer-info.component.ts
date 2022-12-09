import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss']
})
export class CustomerInfoComponent implements OnInit {
  hide = true
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  updateClicked(){
    this.router.navigateByUrl('/update');
  }
}
