import { Component, EventEmitter } from 'angular2/core';
import { HappyHourPipe } from './happyhour.pipe';
import { EditKegComponent} from './keg-edit.component';
import { NewKegComponent } from './keg-new.component';
import { KegComponent } from './keg.component';
import { Keg, IKeg } from './keg.model';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  pipes: [HappyHourPipe],
  directives: [KegComponent, NewKegComponent, EditKegComponent],
  template: `
  <div class="all-kegs">
  <select (change)="onChange($event.target.value)">
    <option value="all">Show All</option>
    <option value="happyhour">Happy Hour</option>
  </select>
    <keg *ngFor="#currentKeg of kegList | HappyHourPipe:filterKeg"
    [keg]="currentKeg" (onEditKeg)="editKeg($event)">
    </keg>
  </div>
  <hr>
  <div class='keg-forms'>
    <new-keg
      (onSubmitNewKeg) = 'createKeg($event)'
    ></new-keg>
    <edit-keg *ngIf="editVisible" [keg]="selectedKeg" (onCloseForm)="onCloseForm()"></edit-keg>
  </div>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public editVisible: boolean = false;
  public filterKeg: string = 'all';

  constructor(){
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }

  onCloseForm(): void {
    this.editVisible = false;
  }

  editKeg(keg: Keg) {
    this.editVisible = true;
    this.selectedKeg = keg;
  }

  createKeg(newKeg: IKeg): void{
    this.kegList.push(
      new Keg(newKeg.name, newKeg.ABV, newKeg.price, this.kegList.length)
    );
  }

  toggleFilter() {
    if(this.filterKeg === 'happyhour') {
      this.filterKeg = 'all';
    }
    else this.filterKeg = "all";
  }

  onChange(filterOption) {
    this.filterKeg = filterOption;
    console.log(this.filterKeg);
  }

}
