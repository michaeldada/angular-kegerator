import { Component } from 'angular2/core';
import { Disp } from './disp.model'

@Component({
  selector: 'disp-display',
  inputs: ['disp'],
template: `
<div>
  <h3>{{disp.name}}</h3>
</div>
`
})

export class DispComponent {
  public disp: Disp;
 }
