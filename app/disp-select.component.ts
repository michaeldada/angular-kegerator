import { Component } from 'angular2/core';
import { Disp } from './disp.model'

@Component({
  selector: 'disp-select',
  inputs: ['disp'],
template: `
<div>
  <h1>Example</h1>
  <h3>{{disp.name}}</h3>
  <h5>{{disp.address}}</h5>
  <h5>{{disp.price}}</h5>
  <h5>{{disp.rating}}</h5>
</div>
`
})

export class DispSelectComponent {
  public disp: Disp;
 }
