import { NgModule } from '@angular/core';
import { LotteryComponent } from './lottery/lottery';
import { HomeComponent } from './home/home';
@NgModule({
	declarations: [LotteryComponent,
    HomeComponent],
	imports: [],
	exports: [LotteryComponent,
    HomeComponent]
})
export class ComponentsModule {}
