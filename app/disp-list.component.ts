import { Component, EventEmitter} from 'angular2/core';
import { DispComponent } from './disp.component'
import { Disp } from './disp.model';

@Component({
  selector: 'disp-list',
  inputs: ['dispList'],
  outputs: ['onDispSelect'],
  directives: [DispComponent],
  template: `
  <div class="all-disps">
    <disp-display *ngFor="#currentDisp of dispList"
      (click)="dispClicked(currentDisp)"
      [class.selected]="currentDisp === selectedDisp"
      [disp]="currentDisp">
    </disp-display>
  </div>
    `
})
export class DispListComponent {
  public dispList: Disp[];
  public onDispSelect: EventEmitter<Disp>;
  public selectedDisp: Disp;
  constructor(){
    this.onDispSelect = new EventEmitter();
  }
  dispClicked(clickedDisp: Disp): void {
    console.log('child', clickedDisp);
    this.selectedDisp = clickedDisp;
    this.onDispSelect.emit(clickedDisp);
  }
}
