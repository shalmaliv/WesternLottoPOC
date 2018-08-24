import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BetSlipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bet-slip',
  templateUrl: 'bet-slip.html',
})
export class BetSlipPage 
{

  testlist = ["a","b","c","d"];

  constructor(public navCtrl: NavController)
  {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BetSlipPage');
  }

}
