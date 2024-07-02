import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/servies/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
deleteFromCart(arg0: any) {
throw new Error('Method not implemented.');
}
updateCart(arg0: any,arg1: any) {
throw new Error('Method not implemented.');
}
  cart: any[] = [];

  userId = 5;
  date = '2020-02-03'; // Assuming you have a way to get the date
  products = [
    { productId: 5, quantity: 1 },
    { productId: 1, quantity: 5 }
  ];
  crtData: any;
  constructor(private cartServices:CartService){

  }
  ngOnInit(): void {
    
  }

  loadCart(){
    this.cartServices.getAllCart().subscribe(data=>{
      this.cart =data
    })
   }

  addToCart(){
    const data ={
      userId : this.userId,
      date: this.date,
      products: this.products
    }
    this.cartServices.addToCart(data).subscribe(data=>{
      this.loadCart();
           
    })
    console.log('crtData: ', this.crtData);
  }


}
