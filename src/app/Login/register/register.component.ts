import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  Roles: any = ['Customer', 'Service Provider'];
  hide = true;
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    const x="vaish";
  }

  loginClicked(){
    this.router.navigateByUrl('/login');
  }
  full_name='';
  getValue(val:string) {
    console.warn(val);
    this.full_name=val;
  }
}
