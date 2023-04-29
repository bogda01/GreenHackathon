import { Component } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.sass'],
})
export class CommunityComponent {
  people = [
    {
      name: 'Andrei',
      achievement: true,
      met: null,
    },
    {
      name: 'Ana',
      achievement: false,
      met: 'Andrei',
    },
    {
      name: 'Bob',
      achievement: true,
      met: null,
    },
    {
      name: 'Jose',
      achievement: false,
      met: 'Bob',
    },
    {
      name: 'Maria',
      achievement: true,
      met: null,
    },
  ];
}
