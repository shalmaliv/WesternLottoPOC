import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

films: Observable<any>;
public testlist:Array<any>;

  constructor(public navCtrl: NavController, public httpClient: HttpClient) {
    debugger;
    this.testlist=[];
    this.films = this.httpClient.get('https://swapi.co/api/films');
    this.films.subscribe(data => {
     this.testlist=data.results;
      console.log('my data: ', data);
    })

  }

}
