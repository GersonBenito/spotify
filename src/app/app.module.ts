import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AccessWithEmailComponent } from './components/access-with-email/access-with-email.component';
import { AccessWithSocialMediaComponent } from './components/access-with-social-media/access-with-social-media.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccessWithSocialMediaComponent,
    AccessWithEmailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
