import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  Roles: any = ['Customer', 'Service Provider'];
  hide = true;
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  name="vaish"
  email="nookala@gmail.com"


  valueChanged=false
  constructor(private router: Router) { 
  }
  
  ngOnInit(): void {
  }
  getValue(val1:string,val2:string) {
    this.name=val1;
    this.email=val2;
    console.warn("hello");
  }
  newValue(){
   this.valueChanged=true;
  }
  updateClicked(data1:string,data2:string){
    this.getValue(data1,data2)
    this.router.navigateByUrl('/info');
  }
  cancelClicked(){
    this.router.navigateByUrl('/info');
  }
}
