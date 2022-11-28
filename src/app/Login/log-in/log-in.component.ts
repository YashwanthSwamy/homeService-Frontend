import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  hide = true
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  registerClicked(){
    this.router.navigateByUrl('/register');
  }

  loginClicked(){
    this.router.navigateByUrl('/homepage');
  }

}
