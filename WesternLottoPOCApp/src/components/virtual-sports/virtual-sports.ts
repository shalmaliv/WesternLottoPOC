import { Component } from '@angular/core';
import { NavController ,LoadingController} from 'ionic-angular';
import { Observable } from "rxjs/Observable";
import { ApiProvider } from "../../providers/api/api";
import { BetSlipPage } from '../../pages/bet-slip/bet-slip';


@Component({
  selector: 'virtual-sports',
  templateUrl: 'virtual-sports.html'
})
export class VirtualSportsComponent 
{
  films: Observable<any>;

  constructor(public navCtrl: NavController, public apiProvider: ApiProvider,public loadingCtrl: LoadingController) 
  {
    const loader = this.loadingCtrl.create({
      content: "Please Wait"
    });
      loader.present();
      this.films = this.apiProvider.getFilms();
      loader.dismiss();
  }

  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad Virtual Sports Page');
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