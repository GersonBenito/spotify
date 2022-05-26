import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AccessWithEmailComponent } from './components/login/access-with-email/access-with-email.component';
import { AccessWithSocialMediaComponent } from './components/login/access-with-social-media/access-with-social-media.component';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';

const configToastr = {
  timeOut: 3000,
  // positionClass: 'toast-bottom-right',
  preventDuplicates: true,
  progressBar: true
}

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
    SharedModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(configToastr)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
