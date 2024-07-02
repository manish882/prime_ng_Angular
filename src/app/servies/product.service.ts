import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly url = environment.apiUrl;
  constructor(private http:HttpClient) { }

  getProducts(): Observable<any> {
    let apiUrl = 'https://fakestoreapi.com/products';
    return this.http.get<any>(apiUrl);
  }
  // getProducts(filter?: any, sortField?: any, sortOrder?: any): Observable<any> {
  //   let apiUrl = 'https://fakestoreapi.com/products';

  //   let params = new HttpParams();
  //   if (filter) {
  //     for (const field of filter) {
  //       if (filter) {
  //         if (filter[field]) {
  //           params = params.set(field, filter[field].value)
  //         }

  //       }
  //     }
  //   }

  //   if (sortField) {
  //     params = params.set('_sort', sortField);
  //     params = params.set('_order', sortOrder === 1 ? 'asc' : 'desc');


  //   }
  //   return this.http.get<any>(apiUrl, { params })
  // }
 
  getAllProduct():Observable<any> {
    return this.http.get(`${this.url}/products`)

  }
  getProductById(productId:any):Observable<any>{
    return this.http.get(`${this.url}/products/${productId}`)
  }
}
