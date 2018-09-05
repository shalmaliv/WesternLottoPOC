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
  lotto511list = ["1","2","3","4","5","6","7","8","9","10","11"];
  kenolist = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80"];
  numberlist : any;
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
      
      if(this.lotteryNameFromLottery == 'Lotto 5/11'){
        this.numberlist = this.lotto511list;
      }else if(this.lotteryNameFromLottery == "Keno"){
        this.numberlist = this.kenolist;
      }


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
