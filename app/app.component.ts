import { Component, EventEmitter } from 'angular2/core';
import { DispListComponent } from './disp-list.component';
import { DispComponent } from './disp.component';
import { Disp } from './disp.model';


@Component({//This component is special - it will hold our entire app. An Angular2 app is built with a tree of components. We have one component called the root component that is responsible for loading its child components, and each of them has their own child components. This way we break our app into manageable chunks.
  selector: 'my-app',
    directives: [DispListComponent],
    template: `
    <div class="container">
      <div class="col-md-6">
        <h1>Dispensary List</h1>
        <disp-list
        [dispList]="disps"
        (onDispSelect)="dispWasSelected($event)">
        </disp-list>
      </div>
      <div class="col-md-6">

      </div>
    </div>

    `
})

export class AppComponent {
  public disps: Disp[];
  constructor(){
    this.disps = [
      new Disp("Chalice Farms", "123 SE Powell Blvd", 2, 0),
      new Disp("AwesomeFarm Farms", "456 Farm St", 1, 1),
      new Disp("Gluten Free Nugs", "123 Expensive Ave", 3, 2),
      new Disp("Rockin Sockin Buds", "420 Mendocino Ave", 2, 3)
    ];
  }
  dispWasSelected(clickedDisp: Disp): void {
    console.log('yo', clickedDisp.name);
  }
}
