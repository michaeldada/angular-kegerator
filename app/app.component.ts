import { Component } from 'angular2/core';

@Component({//This component is special - it will hold our entire app. An Angular2 app is built with a tree of components. We have one component called the root component that is responsible for loading its child components, and each of them has their own child components. This way we break our app into manageable chunks.
  selector: 'my-app',
  template: `
  <div class = "container">
    <h1>Skeleton Angular2 App!</h1>
  </div>
  `

})

export class AppComponent {

}
