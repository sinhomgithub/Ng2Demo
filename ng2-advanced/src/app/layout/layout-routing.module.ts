import { FlotComponent } from './charts/flot/flot.component';
import { LayoutComponent } from './layout.component';
import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'cards', component: CardsComponent },
      {
        path: 'charts', children: [
          { path: 'flot', component: FlotComponent }
        ]
      }
      //{ path: 'charts', loadChildren: () => ChartsRoutingModule }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class LayoutRoutingModule { }
