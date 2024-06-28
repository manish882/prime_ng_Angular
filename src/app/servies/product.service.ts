import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly url = environment.apiUrl;
  constructor(private http:HttpClient) { }


  getAllProduct():Observable<any> {
    return this.http.get(`${this.url}/products`)

  }
  getProductById(productId:any):Observable<any>{
    return this.http.get(`${this.url}/products/${productId}`)
  }
}
