import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector:'keg',
  inputs: ['keg'],
  template: `
    <div>
      <ul>
        <li>{{ keg.name }}</li>
        <li>{{ keg.ABV }}</li>
        <li>{{ keg.price }}</li>
        <li>{{ keg.pints }}</li>
      </ul>
      <button (click)="sellPint()">Sell a Pint</button>
    </div>
  `
})

export class KegComponent {
  public keg: Keg;

  sellPint() {
    this.keg.sellPint();
  }
}
