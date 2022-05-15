import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContainerPrimaryComponent } from './components/container-primary/container-primary.component';
import { TracksComponent } from './components/tracks/tracks.component';
import { AppRoutingModule } from './app.routing.module';
import { ControlComponent } from './components/control/control.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContainerPrimaryComponent,
    TracksComponent, 
    ControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
