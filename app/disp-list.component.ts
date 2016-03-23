import { Component, EventEmitter} from 'angular2/core';
import { DispComponent } from './disp.component'
import { Disp } from './disp.model';
import { DispSelectComponent } from './disp-select.component';

@Component({
  selector: 'disp-list',
  inputs: ['dispList'],
  outputs: ['onDispSelect'],
  directives: [DispComponent, DispSelectComponent],
  template: `
  <div class="all-disps" *ngFor="#currentDisp of dispList">
    <disp-display
      (click)="dispClicked(currentDisp)"
      [class.selected]="currentDisp === selectedDisp"
      [disp]="currentDisp">
    </disp-display>
    <disp-select
    *ngIf="currentDisp === selectedDisp" [disp]="currentDisp">
    </disp-select>
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
