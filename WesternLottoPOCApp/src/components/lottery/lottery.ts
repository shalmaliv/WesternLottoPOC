import { Component } from '@angular/core';
import { LotteryTypes } from "./mock-lottery";
import { NavController } from "ionic-angular";
import { LotteryDetailPage } from "../../pages/lottery-detail/lottery-detail";
import { BetSlipPage } from "../../pages/bet-slip/bet-slip";

/**
 * Generated class for the LotteryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'lottery',
  templateUrl: 'lottery.html'
})
export class LotteryComponent {

   selected = 'RAPID GAMES';

  lotteryGames = LotteryTypes;


  // constructor() {
  //   console.log('Hello LotteryComponent Component');

  // }
  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad LotteryPage');
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

    if(self.selected != name){
        self.selected = name;
    }else if(name == 'RAPID GAMES'){
       self.selected = 'DAILY GAMES';
    }else if(name == 'DAILY GAMES'){
       self.selected = 'RAPID GAMES';
    }
 }

}
