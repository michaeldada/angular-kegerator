import { Component, EventEmitter } from 'angular2/core';
import { Keg, IKeg } from './keg.model';

@Component ({
  selector: 'edit-keg',
  inputs: ['keg'],
  outputs: ['onCloseForm'],
  template: `
  <div class="edit-keg-form">
    <h3> Edit Keg</h3>
    <input value="{{ keg.name }}" #editName>
    <input value="{{ keg.ABV }}" #editABV>
    <input value="{{keg.price}}" #editPrice>
    <button (click)="editKeg(editName, editABV, editPrice)" class="btn-success">Edit Keg</button>
  </div>
  `
})
export class EditKegComponent {
  public keg: Keg;
  public onCloseForm = new EventEmitter();
  editKeg(editName, editABV, editPrice) {
    this.keg.name = editName.value;
    this.keg.ABV = parseInt(editABV.value);
    this.keg.price = parseInt(editPrice.value);
    console.log("I edited a keg:" + editName.value);
    this.onCloseForm.emit({});
  }
}
