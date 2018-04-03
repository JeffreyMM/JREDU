import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MessageComponent } from './components/message/message.component';
import { Childmessage1Component } from './components/childmessage1/childmessage1.component';
import { Childmessage2Component } from './components/childmessage2/childmessage2.component';
import { Childmessage3Component } from './components/childmessage3/childmessage3.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessageComponent,
    Childmessage1Component,
    Childmessage2Component,
    Childmessage3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
