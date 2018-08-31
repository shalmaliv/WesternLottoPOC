import { Component } from '@angular/core';

/**
 * Generated class for the ResultComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'result',
  templateUrl: 'result.html'
})
export class ResultComponent {

  text: string;
  myDate: String;

  constructor() 
  {
    console.log('Hello ResultComponent Component');
    this.text = 'Hello World';
  }

  ngOnInit()
  {
    this.myDate = new Date().toISOString();
  }

}
