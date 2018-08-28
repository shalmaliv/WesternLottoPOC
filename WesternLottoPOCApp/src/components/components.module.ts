import { NgModule } from '@angular/core';
import { LotteryComponent } from './lottery/lottery';
<<<<<<< HEAD
import { HomeComponent } from './home/home';
@NgModule({
	declarations: [LotteryComponent,
    HomeComponent],
	imports: [],
	exports: [LotteryComponent,
    HomeComponent]
=======
import { VirtualSportsComponent } from './virtual-sports/virtual-sports';
@NgModule({
	declarations: [LotteryComponent,
    VirtualSportsComponent],
	imports: [],
	exports: [LotteryComponent,
    VirtualSportsComponent]
>>>>>>> 7c8f913d0f7459c4ff5807a428ae471ba42a54b3
})
export class ComponentsModule {}
