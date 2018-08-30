import { NgModule } from '@angular/core';
import { LotteryComponent } from './lottery/lottery';
import { VirtualSportsComponent } from './virtual-sports/virtual-sports';
import { CasinoComponent } from './casino/casino';
import { HelpComponent } from './help/help';
import { ResultComponent } from './result/result';
@NgModule({
	declarations: [LotteryComponent,
    VirtualSportsComponent,
    CasinoComponent,
    HelpComponent,
    ResultComponent],
	imports: [],
	exports: [LotteryComponent,
    VirtualSportsComponent,
    CasinoComponent,
    HelpComponent,
    ResultComponent]
})
export class ComponentsModule {}
