import { Component } from '@angular/core';
import rewardsData from './rewards.json';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.sass'],
})
export class RewardsComponent {
  rewards = rewardsData;
}
