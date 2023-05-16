import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { user } from '../../model/usermodel';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  userform: FormGroup | any;

  constructor(private formbuilder: FormBuilder, private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.userform = this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password:['',Validators.required],
      streetaddress: ['', Validators.required],
      city: ['', Validators.required],
      province: ['', Validators.required],
      postalcode: ['', Validators.required],
      usertype: ['', Validators.required]
    })
  }

  adduser(data: user) {
    // console.log(this.userform.value);
    this.api.adduser(data).subscribe((response) => {
      alert('User Added Sucessfully');
      this.userform.reset();
      this.router.navigate(["/app-user-list"])
    })

  }
}
