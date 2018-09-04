import { NgModule } from '@angular/core';
import { LotteryComponent } from './lottery/lottery';
import { VirtualSportsComponent } from './virtual-sports/virtual-sports';
import { CasinoComponent } from './casino/casino';
import { HelpComponent } from './help/help';
import { ResultComponent } from './result/result';
import { VsarcherycompComponent } from './vsarcherycomp/vsarcherycomp';
@NgModule({
	declarations: [LotteryComponent,
    VirtualSportsComponent,
    CasinoComponent,
    HelpComponent,
    ResultComponent,
    VsarcherycompComponent],
	imports: [],
	exports: [LotteryComponent,
    VirtualSportsComponent,
    CasinoComponent,
    HelpComponent,
    ResultComponent,
    VsarcherycompComponent]
})
export class ComponentsModule {}
