import { ProductService } from './../../servies/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/model/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  constructor(private ac: ActivatedRoute, private productService: ProductService) {
  }


  ngOnInit(): void {
    this.ac.paramMap.subscribe(params => {
      let productId = params.get('id');

      if (productId) {
        this.productService.getProductById(productId)
          .subscribe({
            next: (data: any) => {
              this.product = data;
              
             },
            error: error => {
              console.error('Error fetching product details:', error);
            }
          }
          );
      }
    });

  }

}