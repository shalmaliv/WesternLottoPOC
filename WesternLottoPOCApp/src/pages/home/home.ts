import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

films: Observable<any>;
public testlist:Array<any>;

  constructor(public navCtrl: NavController, public httpClient: HttpClient, public loadingCtrl: LoadingController) {
    debugger;
    this.testlist=[];
    const loader = this.loadingCtrl.create({
      content: "Please Wait"
    });
    this.films = this.httpClient.get('https://swapi.co/api/films');
    loader.present();
    this.films.subscribe(data => {
     this.testlist=data.results;
     loader.dismiss();
      console.log('my data: ', data);
    })

  }

}
