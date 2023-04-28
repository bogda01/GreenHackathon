import { Component } from '@angular/core';

@Component({
  selector: 'app-top-people',
  templateUrl: './top-people.component.html',
  styleUrls: ['./top-people.component.sass']
})
export class TopPeopleComponent {
  people = [
    {name: "Bob", score: 542},
    {name: "Andrei", score: 441},
    {name: "59673421", score: 409},
    {name: "45703248", score: 307},
    {name: "John", score: 276},
    {name: "Albert", score: 221},
    {name: "Alex", score: 214},
    {name: "Amy", score: 108},
    {name: "Bob", score: 73}
  ];
}
