import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Charts } from './charts';

@Injectable()
export class ChartService {
  constructor(private http: HttpClient) { }
  url = 'https://api.coindesk.com/v1/bpi/historical/close.json';
  getChart() {
    return this
            .http
            .get(`${this.url}`);
  }
}

