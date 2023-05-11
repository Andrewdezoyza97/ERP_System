// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-user-loging',
//   templateUrl: './user-loging.component.html',
//   styleUrls: ['./user-loging.component.css']
// })
// export class UserLogingComponent implements OnInit {

//   email: string = '';
//   password: string = '';

//   isLogin: boolean = true;
//   errMessage: string = '';

//   constructor(private router: Router, private http: HttpClient) { }

//   ngOnInit(): void { }

//   logingClick() {
//     console.log(this.email);
//     console.log(this.password);

//     let bodyData = {
//       email: this.email,
//       password: this.password,
//     };

//     this.http.post("http://localhost:9002/user/login", bodyData)
//       .subscribe((resultData: any) => {
//         console.log(resultData);

//         if (resultData.status) {
//           this.router.navigateByUrl('/app-user-dashboard');
//           alert("User Logged In Successfully")
//         } else {
//           alert("Incorrect Email or Password");
//           console.log("Error Logging")
//         }
//       });
//   };


//   newAccountClick() {
//     this.router.navigate(['/app-user-signning'])
//   }



// }