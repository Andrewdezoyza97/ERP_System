import { Component, OnInit } from '@angular/core';
import { user } from '../../model/usermodel';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent  implements OnInit{

  loginUser: user = new user();

  constructor() { }

  
  ngOnInit(): void {
    const loginData = localStorage.getItem('logindata');
    if (loginData) {
      const i = JSON.parse(loginData);
      this.loginUser = i;
      // Assign other properties as needed
    }
  }

}
