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
  title = 'app';
  data: Charts[];
  url = 'https://api.coindesk.com/v1/bpi/historical/close.json';
  month = [];
  price = [];
  chart = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get(this.url).subscribe((res: Charts[]) => {
      Object.keys(res);
      Array.from(res).forEach(y => {
        this.month.push(y.month);
        this.price.push(y.price);
      });
      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.month,
          datasets: [
            {
              data: this.price,
              borderColor: '#3e95cd',
              fill: false
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
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
      this.chart = data;
      this.chart.map(res => {
        console.log(res);
      });
    });
  }
}
*/

