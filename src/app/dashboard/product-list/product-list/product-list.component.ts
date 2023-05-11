import { Component, OnInit } from '@angular/core';
import { product } from '../../model/productmodel';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  data: product[] | undefined;

  constructor(private api: ApiService) { }
  ngOnInit(): void {
     this.getproduct();
  }
  getproduct(){
    this.api.getproduct().subscribe(response => {
      this.data = response;
    })
  }
}
