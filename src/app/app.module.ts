import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { RoutingcomponenComponent } from './routingcomponen/routingcomponen.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    RoutingcomponenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
