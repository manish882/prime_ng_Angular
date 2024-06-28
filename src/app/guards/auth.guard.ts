import { AuthService } from 'src/app/servies/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private AuthService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> | boolean {
    return this.AuthService.authToken.pipe(
      map(token => {
        if (token) {
          return true; // User is authenticated
        } else {
          this.router.navigate(['/login']); // Redirect to login page if not authenticated
          return false;
        }
      })
    );
  }
}
