import {Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { NewKegComponent } from './keg-new.component';
import { Keg, IKeg } from './keg.model';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegComponent, NewKegComponent],
  template: `
  <div class="all-kegs">
    <keg *ngFor="#currentKeg of kegList"
    [keg]="currentKeg"></keg>
  </div>
  <hr>
  <div class='keg-forms'>
    <new-keg
      (onSubmitNewKeg) = 'createKeg($event)'
    ></new-keg>
  </div>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;

  constructor(){
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(newKeg: IKeg): void{
    newKeg.id = this.kegList.length;
    this.kegList.push(
      new Keg(newKeg.name, newKeg.ABV, newKeg.price, newKeg.id)
    );
  }
}
