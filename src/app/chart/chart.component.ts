import { Component, OnInit } from '@angular/core';
import { ChartService } from './chart.service';
import { Charts } from './charts';
import { map } from 'rxjs/operators';

import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  data: Charts[];
  url = 'https://api.coindesk.com/v1/bpi/historical/close.json';
  month = [];
  bpi = [];
  chart = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get(this.url).subscribe((res: Charts[]) => {
      Object.keys(res);
      console.log(res);
      Array.from(res).forEach(cont => {
        this.month.push(cont.month);
        this.bpi.push(cont.bpi);
      });
      console.log(this.bpi);
      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.month,
          datasets: [{
              label: 'closing value',
              data: this.bpi,
          }]
      }
      });
    });
  }
}

/*
  chart: Chart[];

  constructor(private chartService: ChartService) { }

  ngOnInit() {
    this.chartService
    .getChart()
    .subscribe((data: Chart[]) => {
      Object.keys(data);
      this.chart = data;
      this.chart.map(res => {
        console.log(res);
      });
    });
  }
}
*/

