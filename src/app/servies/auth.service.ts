import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly apiUrl = environment.apiUrl;
  private tokenSubject: BehaviorSubject<string|null>;

  constructor(private http: HttpClient,private router:Router) { 
    const storedToken = localStorage.getItem('authToken');
    this.tokenSubject = new BehaviorSubject<string|null>(storedToken);
  }

  get authToken(): Observable<string|null> {
    return this.tokenSubject.asObservable();
  }
  UserLogin(username: string, password: string  ): Observable<any>{
    let url =`${this.apiUrl}/auth/login`;
    const body ={username,password}
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });  
    return this.http.post(url, body,{headers}).pipe(
      tap((res:any)=>{
        if(res && res.token){
          localStorage.setItem('authtoken',res.token);
          this.tokenSubject.next( res.token);
          this.router.navigate(['/home']);
        }
      })
    )

  }
  logout(): void {
    localStorage.removeItem('authToken');
    this.tokenSubject.next(null);
    // Additional logout logic like clearing user data or navigating to login page can be added here
  }


}
