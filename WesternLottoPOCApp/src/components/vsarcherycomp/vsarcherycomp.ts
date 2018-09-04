import { Component } from '@angular/core';
import {VirtualGameSingleItem} from './virtual-sports-mock'
import { NavController } from "ionic-angular";



/**
 * Generated class for the VsarcherycompComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'vsarcherycomp',
  templateUrl: 'vsarcherycomp.html'
})
export class VsarcherycompComponent {

  text: string;
  sportslist = VirtualGameSingleItem;
  singlegamedetail :any;
  category_id : number;
  Isdetailpageopened: boolean = false;


  constructor(public navCtrl: NavController) {
    console.log('Hello VsarcherycompComponent Component');
    this.text = 'Hello World';
  }

  click_menu(id){
    this.category_id = id;
    this.singlegamedetail = this.sportslist[id].gamedetailsublist;
    this.Isdetailpageopened = true;

  }

  backpressed(){
    this.Isdetailpageopened = false;
  }
}
