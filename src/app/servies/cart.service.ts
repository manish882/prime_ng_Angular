 import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { CartData, Product } from 'src/model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  readonly url = 'https://fakestoreapi.com/carts';

  private cart = new BehaviorSubject<Product[]>([]);
  cart$ = this.cart.asObservable()

   constructor(private http:HttpClient) { }

  getAllCart():Observable<any[]>{
    return this.http.get<any[]>(this.url)
   }

   getCart(cartId:any):Observable<any[]>{
    return this.http.get<any[]>(`${this.url}/${cartId}`)
   }

   addToCart(data:{userId?:number, date?: string, products?: { productId?: number, quantity?: number }[] }): Observable<any> {
    const{userId,date,products} =data;
    const body ={userId,date,products}
    return this.http.post(this.url,body);
  }

   updateCart(cartData: CartData,CartId:number): Observable<any>{
      return this.http.put(`${this.url}/${CartId}`,cartData)
   }

   deleteCart(CartId:number): Observable<any>{
    return this.http.delete(`${this.url}/${CartId}`)
   }

        
 

}
