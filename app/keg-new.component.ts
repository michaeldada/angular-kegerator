import { Component, EventEmitter } from 'angular2/core';
import { Keg, IKeg } from './keg.model';

@Component ({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="new-keg-form">
    <h3>Tap Keg</h3>
    <input placeholder="Name" #newName>
    <input placeholder="ABV in percent" #newABV>
    <input placeholder="$/Pint" #newPrice>
    <button (click)="addKeg(newName, newABV, newPrice)" class="btn-success">Add Keg</button>
  </div>
  `
})

export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<IKeg>;//reference 'Keg ' from class in keg.model
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();

  }

  addKeg(newName: HTMLInputElement, newABV: HTMLInputElement, newPrice: HTMLInputElement) {
    console.log("I made a keg:" + newName.value);
    var newKeg: IKeg = {
      name: newName.value,
      ABV: parseInt(newABV.value),
      price: parseInt(newPrice.value)
    }
    newName.value = '';
    newABV.value = '';
    newPrice.value = '';

    this.onSubmitNewKeg.emit(newKeg);
  }
}
