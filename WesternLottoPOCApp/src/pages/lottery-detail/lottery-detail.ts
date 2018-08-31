import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad LotteryDetailPage');
      debugger;
      let rowNum = 0; //counter to iterate over the rows in the grid
  
      for (let i = 0; i < this.numberlist.length; i+= this.noOfColsPerRow) { //iterate images

        this.grid[rowNum] = Array(6); //declare elements per row

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

}
