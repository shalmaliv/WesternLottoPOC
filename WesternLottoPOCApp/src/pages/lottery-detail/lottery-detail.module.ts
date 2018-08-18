import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LotteryDetailPage } from './lottery-detail';

@NgModule({
  declarations: [
    LotteryDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(LotteryDetailPage),
  ],
})
export class LotteryDetailPageModule {}
