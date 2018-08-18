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

  constructor(public navCtrl: NavController) {
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
<<<<<<< HEAD
 {
   
  this.navCtrl.push(BetSlipPage);
=======
 {   
   this.navCtrl.push(BetSlipPage)
>>>>>>> 1de49b844704528cfeaa294786950c87a1330975
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
