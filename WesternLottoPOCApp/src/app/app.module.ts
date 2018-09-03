import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BetSlipPage } from '../pages/bet-slip/bet-slip'
import { LotteryDetailPage } from '../pages/lottery-detail/lottery-detail';
import { ApiProvider } from '../providers/api/api';
import { HttpClientModule } from "@angular/common/http";
import { SegmentPage } from "../pages/segment/segment";
import { LotteryComponent } from "../components/lottery/lottery";
import { VirtualSportsComponent } from "../components/virtual-sports/virtual-sports";
import { HomeComponent} from "../components/home/home"
import { CasinoComponent } from "../components/casino/casino"
import { HelpComponent } from "../components/help/help"
import { ResultComponent } from "../components/result/result"
import { VirtualSportsDetailPage } from '../pages/virtual-sports-detail/virtual-sports-detail';

@NgModule({
  declarations: [
    MyApp,
    SegmentPage,
    BetSlipPage,    
    LotteryDetailPage,
    LotteryComponent,
    VirtualSportsComponent,
    HomeComponent,
    CasinoComponent,
    HelpComponent,
    ResultComponent,
    VirtualSportsDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{tabsPlacement: 'top'}),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SegmentPage, 
    BetSlipPage,    
    LotteryDetailPage,
    LotteryComponent,
    VirtualSportsComponent,
    HomeComponent,
    CasinoComponent,
    HelpComponent,
    ResultComponent,
    VirtualSportsDetailPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider
  ]
})
export class AppModule {}
