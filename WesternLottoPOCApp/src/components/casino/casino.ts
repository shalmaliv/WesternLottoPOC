import { Component } from '@angular/core';

/**
 * Generated class for the CasinoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'casino',
  templateUrl: 'casino.html'
})
export class CasinoComponent 
{

  text: string;

  constructor() 
  {
    console.log('Hello CasinoComponent Component');
    this.text = 'Hello World';
  }

}
