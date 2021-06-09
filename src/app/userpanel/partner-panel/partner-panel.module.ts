import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PpBadgesComponent } from './components/pp-badges/pp-badges.component';
import { PpPayoutsComponent } from './components/pp-payouts/pp-payouts.component';
import { PpSellHistoryComponent } from './components/pp-sell-history/pp-sell-history.component';
import { PpStructureComponent } from './components/pp-structure/pp-structure.component';
import { PartnerPanelRoutingModule } from './partner-panel-routing.module';
import { PartnerPanelComponent } from './partner-panel.component';

@NgModule({
  declarations: [PartnerPanelComponent, PpStructureComponent, PpSellHistoryComponent, PpPayoutsComponent, PpBadgesComponent],
  imports: [CommonModule, PartnerPanelRoutingModule],
})
export class PartnerPanelModule {}
