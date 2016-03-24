import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector:'keg',
  inputs: ['keg'],
  template: `
    <div>
      <ul>
        <li>{{ keg.name }}</li>
        <li> Amount Left: {{ keg.fullPercent() }} %</li>
        <li>ABV: {{ keg.ABV }}</li>
        <li>{{ keg.price | currency:'USD':true:'1.2-2' }} Pint</li>
        <li>Pints Remaining {{ keg.pints }}</li>
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
