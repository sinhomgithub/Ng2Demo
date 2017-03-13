import { FlotComponent } from './charts/flot/flot.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  declarations: [DashboardComponent, CardsComponent, FlotComponent]
})
export class LayoutModule { }
