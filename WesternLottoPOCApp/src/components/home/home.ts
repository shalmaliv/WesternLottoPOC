import { Component } from '@angular/core';
import{ HomePageGamesList} from '../home/mock-home'

/**
 * Generated class for the HomeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomeComponent {

  text: string;
  gamelist = HomePageGamesList;

  constructor() {
    console.log('Hello HomeComponent Component');
    this.text = 'Hello World';
  }

}
