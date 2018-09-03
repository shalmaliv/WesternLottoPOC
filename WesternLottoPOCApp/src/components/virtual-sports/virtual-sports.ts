import { Component } from '@angular/core';
import { NavController ,LoadingController} from 'ionic-angular';
import { Observable } from "rxjs/Observable";
import { ApiProvider } from "../../providers/api/api";
import { VirtualSportsListing} from '../virtual-sports/virtual-sports-mock'


@Component({
  selector: 'virtual-sports',
  templateUrl: 'virtual-sports.html'
})
export class VirtualSportsComponent 
{
  virtualgames= VirtualSportsListing;
   constructor(public navCtrl: NavController, public apiProvider: ApiProvider,public loadingCtrl: LoadingController) 
   {
  //   const loader = this.loadingCtrl.create({
  //     content: "Please Wait",
  //     duration:2000    
  //   });
  //     loader.present();
  //     this.films = this.apiProvider.getFilms();
  }
}