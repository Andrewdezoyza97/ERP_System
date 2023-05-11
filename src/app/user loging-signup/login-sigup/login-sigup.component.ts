import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { signup, login } from 'src/app/dashboard/model/usermodel';

@Component({
  selector: 'app-login-sigup',
  templateUrl: './login-sigup.component.html',
  styleUrls: ['./login-sigup.component.css']
})
export class LoginSigupComponent implements OnInit {

  isshow = false;
  signupform: FormGroup | any;
  loginform: FormGroup | any;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private route : Router) { }

  ngOnInit(): void {
    //Register User
    this.signupform = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
    //login User
    this.loginform = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  registerhere() {
    this.isshow = true;
  }

  loginhere() {
    this.isshow = false;
  }

  register() {
    this.http.post<signup>("http://localhost:3000/signup", this.signupform.value).subscribe(response => {
      console.log(response)
      alert("User Registered Successfully");
      this.signupform.reset();
    })
  }


  login() {
    this.http.get<login[]>("http://localhost:3000/signup").subscribe(response => {
      //matching email & password logic
      const user = response.find((any: any) => {
        return any.email === this.loginform.value.email && any.password === this.loginform.value.password;
      });
      //Condition for login
      if (user) {
        alert("User Loging to Dashboard Succesfully");
        this.loginform.reset();
        this.route.navigate(['./app-user-list']);
        //storing data in local storage
        localStorage.setItem('logidata',JSON.stringify(user))
      } else {
        alert("Inavalid Creditials")
        this.loginform.reset();
      }
    }, error => {
      alert('Data Getting Server Error ')
      this.loginform.reset();
    })
  }

}
