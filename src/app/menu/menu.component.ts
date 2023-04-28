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
      },
      {
        label: 'Map',
        icon: 'pi pi-map-marker',
      },
      {
        label: 'Reward',
        icon: 'pi pi-gift',
      },
      {
        label: 'Get Bike',
        icon: 'pi pedal_bike',
      },
      {
        label: 'Settings',
        icon: 'pi pi-wrench',
      },
    ];
  }
}
