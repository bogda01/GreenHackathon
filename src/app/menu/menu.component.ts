import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
})
export class MenuComponent {
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Profile',
        icon: 'pi pi-user',
        routerLink: '/profile',
      },
      {
        label: 'Map',
        icon: 'pi pi-map-marker',
        routerLink: '/map',
      },
      {
        label: 'Reward',
        icon: 'pi pi-gift',
        routerLink: '/rewards',
      },
      {
        label: 'Ranking',
        icon: 'pi pi-sitemap',
        routerLink: '/ranking',
      },
      {
        label: 'Settings',
        icon: 'pi pi-wrench',
        routerLink: '/settings',
      },
    ];
  }
}
