import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector:'keg',
  inputs: ['keg'],
  outputs: ['onEditKeg'],//only used when we have an EventEmitter
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
      <button (click)="editKeg()">Edit Keg Details</button>
    </div>
  `
})

export class KegComponent {
  public keg: Keg;
  public onEditKeg: EventEmitter<Keg>;
  constructor(){
    this.onEditKeg = new EventEmitter();
  }

  sellPint() {
    this.keg.sellPint();
  }

  editKeg() {
    this.onEditKeg.emit(this.keg);
  }
}
