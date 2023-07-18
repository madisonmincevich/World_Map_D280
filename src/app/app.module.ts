import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryinformationComponent } from './components/countryinformation/countryinformation.component';
import { WorldmapComponent } from './components/worldmap/worldmap.component';

@NgModule({
  declarations: [AppComponent, WorldmapComponent, CountryinformationComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
