import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PricesComponent } from './prices/prices.component';
import { NgApexchartsModule } from 'ng-apexcharts';

import { HttpClientModule } from '@angular/common/http';
import { PriceService } from './prices/price.service';
import { ChartComponent } from './chart/chart.component';
import { ChartService } from './chart/chart.service';

@NgModule({
  declarations: [
    AppComponent,
    PricesComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgApexchartsModule,
  ],
  providers: [PriceService, ChartService],
  bootstrap: [AppComponent],
  exports: [PricesComponent]
})
export class AppModule { }
