import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopmostComponent } from './nav/topmost/topmost.component';
import { MiddleComponent } from './nav/middle/middle.component';
import { AboutComponent } from './nav/about/about.component';
import { LandingComponent } from './landing/landing.component';
import { IndustriesComponent } from './nav/about/industries/industries.component';
import { ServicesComponent } from './nav/about/services/services.component';
import { LatestComponent } from './nav/about/latest/latest.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { FootComponent } from './footer/foot/foot.component';

@NgModule({
  declarations: [
    AppComponent,
    TopmostComponent,
    MiddleComponent,
    LandingComponent,
    AboutComponent,
    IndustriesComponent,
    ServicesComponent,
    LatestComponent,
    AboutPageComponent,
    FootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
