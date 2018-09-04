import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VirtualSportsDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-virtual-sports-detail',
  templateUrl: 'virtual-sports-detail.html',
})
export class VirtualSportsDetailPage {
  pagename : any;
  IsVideoVisible: boolean = true;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pagename = navParams.get('pagename');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VirtualSportsDetailPage');
  }

  playVideo(){
    if(this.IsVideoVisible == true){
        this.IsVideoVisible = false;
    }else{
      this.IsVideoVisible = true;
    }
  }
}
