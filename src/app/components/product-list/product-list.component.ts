import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, RouteReuseStrategy, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/servies/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productdata: any[] = [];
  filteredProducts: any;

  constructor(private productApi: ProductService, private router: Router) {

  }
  ngOnInit(): void {
    this.getProduct();
  }
  getProduct() {
    this.productApi.getAllProduct().subscribe(data => {
      this.productdata = data
      this.filteredProducts = data;

     })
  }

  productDetails(productId:number):void {
    this.router.navigate(['/products',productId])
  }
    filterProduct(category:any):void{
    this.filteredProducts = this.productdata.filter(product=> product.category === product);
   }


}
