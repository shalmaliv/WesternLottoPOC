import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VirtualSportsDetailPage } from './virtual-sports-detail';

@NgModule({
  declarations: [
    VirtualSportsDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(VirtualSportsDetailPage),
  ],
})
export class VirtualSportsDetailPageModule {}
