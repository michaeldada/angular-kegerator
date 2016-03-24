import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';


@Component({//This component is special - it will hold our entire app. An Angular2 app is built with a tree of components. We have one component called the root component that is responsible for loading its child components, and each of them has their own child components. This way we break our app into manageable chunks.
  selector: 'my-app',
    directives: [KegListComponent],
    template: `
    <div class="container">
      <h1>Keginator</h1>
      <keg-list
      [kegList]="kegs">
          <h1>Keg List</h1>
      </keg-list>
    </div>
    `
})

export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg('Oakshire IPA', 7.2, 4, 0),
      new Keg('Sierra Nevada Banana IPA', 8.0, 5, 1),
      new Keg('Dayum Ale', 5.6, 2, 2),
      new Keg('Spoiled Bud Light', 0.3, 1, 2)
    ];
  }
    KegWasSelected(clickedKeg: Keg): void {
    console.log('yo', clickedKeg.name);
  }
}
