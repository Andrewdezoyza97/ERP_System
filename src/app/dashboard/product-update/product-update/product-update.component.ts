import { Component, OnInit } from '@angular/core';
import { product } from '../../model/productmodel';
import { ApiService } from '../../service/api.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  

  public productid!: number;
  public productdata: product = {} as product;

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute, private route : Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param: Params) => {
      this.productid = param['id']
    })
    this.api.gettingproduct(this.productid).subscribe((data: product) => {
      this.productdata = data;
      console.log(data)
    })
  }

  updateproduct(){
    this.api.updateproduct(this.productdata, this.productid).subscribe((response:product)=>{
      alert("Product Updated Successfully")
      this.route.navigate(['/app-product-list'])
    })
  }
}
