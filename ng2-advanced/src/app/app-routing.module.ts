import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'login', component: LoginComponent }
  // {
  //   path: '', component: LayoutComponent,
  //   children: [
  //     { path: 'dashboard', component: DashboardComponent },
  //     { path: 'cards', component: CardsComponent },
  //     {
  //       path: 'charts', children: [
  //         { path: '', redirectTo: 'flot', pathMatch:'full' },
  //         { path: 'flot', component: FlotComponent }
  //       ]
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: false })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
