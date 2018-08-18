import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BetSlipPage } from '../bet-slip/bet-slip'
import { LotteryTypes } from "./mock-lottery";
import { LotteryDetailPage } from "../lottery-detail/lottery-detail";

@IonicPage()
@Component({
  selector: 'page-lottery',
  templateUrl: 'lottery.html',
})
export class LotteryPage {

  selected = 'RAPID GAMES';

  lotteryGames = LotteryTypes;

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

 performclick(){
      let self = this;
      self.navCtrl.push(LotteryDetailPage)
 }

 performHeaderClick(name){
    let self = this;
    self.selected = name;
    console.log(name);
 }

}
