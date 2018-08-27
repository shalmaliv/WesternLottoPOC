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
import { BetSlipPage } from '../pages/bet-slip/bet-slip'
import { LotteryDetailPage } from '../pages/lottery-detail/lottery-detail';
import { ApiProvider } from '../providers/api/api';
import { HttpClientModule } from "@angular/common/http";
import { SegmentPage } from "../pages/segment/segment";
import { LotteryComponent } from "../components/lottery/lottery";

@NgModule({
  declarations: [
    MyApp,
    LotteryPage,
    ContactPage,
    HomePage,
    BetSlipPage,
    TabsPage,
    BetSlipPage,
    SegmentPage,
    LotteryDetailPage,
    LotteryComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{tabsPlacement: 'top'}),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LotteryPage,
    ContactPage,
    HomePage,
    BetSlipPage,
    TabsPage,
    BetSlipPage,
    SegmentPage, 
    LotteryDetailPage,
    LotteryComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider
  ]
})
export class AppModule {}
