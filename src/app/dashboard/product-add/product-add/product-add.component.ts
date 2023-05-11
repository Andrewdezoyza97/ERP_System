import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';
import { product } from '../../model/productmodel';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit{

  productform : FormGroup |any;

  constructor(private formbuilder: FormBuilder, private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.productform = this.formbuilder.group({
      productname: ['', Validators.required],
      decription: ['', Validators.required],
      productcode: ['', Validators.required],
      producttype: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
    })
  }

  addproduct(data:product){
    this.api.addproduct(data).subscribe((response =>{
      alert("Product Details Added Succesfully");
      this.productform.reset();
      this.router.navigate(['/app-product-list'])
    }))
  }

}
