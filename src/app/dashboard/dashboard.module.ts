import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ControlsComponent } from './controls/controls.component';
import { TracksComponent } from './tracks/tracks.component';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    SidebarComponent,
    ControlsComponent,
    TracksComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
