import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { user } from '../model/usermodel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {} 

}
