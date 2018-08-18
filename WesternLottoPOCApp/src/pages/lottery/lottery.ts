import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BetSlipPage } from '../bet-slip/bet-slip'
import { LotteryRapidGames, LotteryDailyGamesMain } from "./mock-lottery";

/**
 * Generated class for the LotteryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lottery',
  templateUrl: 'lottery.html',
})
export class LotteryPage {

  rapidGames = LotteryRapidGames;
  dailyGames = LotteryDailyGamesMain;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad LotteryPage');
  }

 refreshPage()
 {
   console.log('Button Is Clicked')
   this.ionViewDidLoad()
 }

 openBetSlipPage()
 {
   this.navCtrl.push(BetSlipPage)
 }

}
