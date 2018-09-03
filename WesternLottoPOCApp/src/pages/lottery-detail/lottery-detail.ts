import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BetSlipPage } from "../../pages/bet-slip/bet-slip";


/**
 * Generated class for the LotteryDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lottery-detail',
  templateUrl: 'lottery-detail.html',
})
export class LotteryDetailPage {
  numberlist = ["1","2","3","4","5","6","7","8","9","10","11"];
  grid=[];
  noOfColsPerRow = 6;
  lotteryNameFromLottery : any;
  jokerOneCardList = ["../../assets/imgs/jd.png","../../assets/imgs/jh.png","../../assets/imgs/js.png","../../assets/imgs/jc.png","../../assets/imgs/qd.png","../../assets/imgs/qh.png","../../assets/imgs/qs.png","../../assets/imgs/qc.png","../../assets/imgs/kd.png","../../assets/imgs/kh.png","../../assets/imgs/ks.png","../../assets/imgs/ks.png","../../assets/imgs/joker.png"];
  pickCorrectFaceList = ["../../assets/imgs/face_img_one.png","../../assets/imgs/face_img_two.png","../../assets/imgs/face_img_three.png"];
  pickCorrectSuitList = ["../../assets/imgs/suit_img_three.png","../../assets/imgs/suit_img_two.png","../../assets/imgs/suit_img_four.png","../../assets/imgs/suit_img_one.png"];

  constructor(public navCtrl: NavController, public navParams: NavParams) 
  {
      this.lotteryNameFromLottery = navParams.data.name;
  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad LotteryDetailPage');
      console.log('Name retrieved is ', this.lotteryNameFromLottery);
      
      let rowNum = 0; //counter to iterate over the rows in the grid
  
      for (let i = 0; i < this.numberlist.length; i+= this.noOfColsPerRow) { //iterate images

        this.grid[rowNum] = Array(this.noOfColsPerRow); //declare elements per row

        for(let j = 0; j < this.noOfColsPerRow ;j++){

            if (this.numberlist[i + j]) { //check file URI exists
                this.grid[rowNum][j] = this.numberlist[i + j] //insert number
            }else{
              this.grid[rowNum][j] = -1; //insert default no
            }
        }        
        rowNum++; //go on to the next row
      }



   }

   openBetSlipPage()
   {   
      this.navCtrl.push(BetSlipPage)
   }
}
