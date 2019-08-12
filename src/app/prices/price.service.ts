import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PriceService {
  constructor(private http: HttpClient) { }
  url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
  getPrices() {
    return this
            .http
            .get(`${this.url}`);
        }
}
