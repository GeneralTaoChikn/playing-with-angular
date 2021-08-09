import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { FooterLinksComponent } from './footer-links/footer-links.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    Assignment2Component,
    FooterLinksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
