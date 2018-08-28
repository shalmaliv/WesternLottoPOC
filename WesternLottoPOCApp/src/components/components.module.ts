import { NgModule } from '@angular/core';
import { LotteryComponent } from './lottery/lottery';
import { VirtualSportsComponent } from './virtual-sports/virtual-sports';
@NgModule({
	declarations: [LotteryComponent,
    VirtualSportsComponent],
	imports: [],
	exports: [LotteryComponent,
    VirtualSportsComponent]
})
export class ComponentsModule {}
