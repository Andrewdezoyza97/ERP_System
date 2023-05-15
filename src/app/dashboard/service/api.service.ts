import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../model/usermodel';
import { product } from '../model/productmodel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  //post Method
  adduser(data: user) {
    return this.http.post<user>("http://localhost:3000/posts", data)
  }

  //get Method
  getuser() {
    return this.http.get<user[]>("http://localhost:3000/posts")
  }

  //delete user Method
  deleteuser(id: number) {
    return this.http.delete<user>("http://localhost:3000/posts/" + id)
  }

  //getting data on User edit
  gettingdata(id: number) {
    return this.http.get<user>("http://localhost:3000/posts/" + id)
  }

  //update User Detail
  updateuser(data: user, id: number) {
    return this.http.put<user>("http://localhost:3000/posts/" +id,data)
  }



  //Add Product
  addproduct(data: product) {
    return this.http.post<product>("http://localhost:3000/products", data)
  }

  //get Product Method
  getproduct() {
    return this.http.get<product[]>("http://localhost:3000/products/")
  }

  //delete Product Method
  deleteproduct(id: number) {
    return this.http.delete<product>("http://localhost:3000/products/" + id)
  }

  //Geting Data to Product edit
  gettingproduct(id: number) {
    return this.http.get<product>("http://localhost:3000/products/" + id)
  }

  //update Product Details
  updateproduct(data: product, id: number) {
    return this.http.put<product>("http://localhost:3000/products/" +id,data)
  }
}
