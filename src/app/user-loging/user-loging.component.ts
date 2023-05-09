import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-loging',
  templateUrl: './user-loging.component.html',
  styleUrls: ['./user-loging.component.css']
})
export class UserLogingComponent implements OnInit {

  constructor( private router:Router) {}
  
  ngOnInit(): void {}

  newAccountClick(){
    this.router.navigate(['./app-user-signning'])
  }

  logingClick(){
    this.router.navigate(['./app-user-dashboard'])
  }

}