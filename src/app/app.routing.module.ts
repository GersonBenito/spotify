import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { 
    path: 'dashboard',  component: DashboardComponent, 
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
