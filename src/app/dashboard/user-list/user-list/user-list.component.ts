import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { user } from '../../model/usermodel';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  data: user[] | undefined;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getuser();
  }

  getuser() {
    this.api.getuser().subscribe(response => {
      this.data = response;
    })
  }

  deleteuser(id: number) {
    this.api.deleteuser(id).subscribe(response => {
      alert("User Deleted Successfully")
      this.getuser();
    })
  }
  logout() {
localStorage.removeItem("logindata")
  }

}
