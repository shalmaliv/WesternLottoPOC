import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LotteryPage } from "../pages/lottery/lottery";
import { LotteryDetailPage } from '../pages/lottery-detail/lottery-detail';
import { BetSlipPage } from '../pages/bet-slip/bet-slip';


@NgModule({
  declarations: [
    MyApp,
    LotteryPage,
    ContactPage,
    HomePage,
    TabsPage,
    BetSlipPage,
    
    LotteryDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{tabsPlacement: 'top'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LotteryPage,
    ContactPage,
    HomePage,
    TabsPage,
    BetSlipPage,  
    LotteryDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
