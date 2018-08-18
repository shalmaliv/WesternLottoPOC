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
<<<<<<< HEAD
import { LotteryDetailPage } from '../pages/lottery-detail/lottery-detail';
import { BetSlipPage } from '../pages/bet-slip/bet-slip';

=======
import { BetSlipPage } from '../pages/bet-slip/bet-slip'
import { LotteryDetailPage } from '../pages/lottery-detail/lottery-detail';
>>>>>>> 1de49b844704528cfeaa294786950c87a1330975

@NgModule({
  declarations: [
    MyApp,
    LotteryPage,
    ContactPage,
    HomePage,
<<<<<<< HEAD
=======
    BetSlipPage,
>>>>>>> 1de49b844704528cfeaa294786950c87a1330975
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
<<<<<<< HEAD
=======
    BetSlipPage,
>>>>>>> 1de49b844704528cfeaa294786950c87a1330975
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
