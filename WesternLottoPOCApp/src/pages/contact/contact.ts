import { Component } from '@angular/core';
import { NavController ,LoadingController} from 'ionic-angular';
import { Observable } from "rxjs/Observable";
import { ApiProvider } from "../../providers/api/api";


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
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

}
