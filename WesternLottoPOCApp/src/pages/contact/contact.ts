import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from "rxjs/Observable";
import { ApiProvider } from "../../providers/api/api";


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  films: Observable<any>;

  constructor(public navCtrl: NavController, public apiProvider: ApiProvider) {
      this.films = this.apiProvider.getFilms();
  }

}
