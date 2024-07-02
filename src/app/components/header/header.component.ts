import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/home'
      },
      {
        label :'Data',
        icon:'pi-table',
        routerLink: '/Data'
      },
      {
        label: 'Forms',
        icon: 'pi pi-fw pi-list',
        routerLink: '/forms'
      },
      {
        label: 'Login',
        icon: 'pi pi-fw pi-sign-in',
        routerLink: '/login'
      },
      {
        label: 'Signup',
        icon: 'pi pi-fw pi-user-plus',
        routerLink: '/signup'
      },
      {
        label: 'Cart',
        icon: 'pi-cart-arrow-down',
        routerLink: '/cart'
      },
    ];
  }
}
