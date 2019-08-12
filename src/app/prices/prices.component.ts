import { Component, OnInit } from '@angular/core';
import { PriceService } from './price.service';
import { Price } from './price';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {

  price: Price[];

  constructor(private priceService: PriceService) { }

  ngOnInit() {
    this.priceService
    .getPrices()
    .subscribe((data: Price[]) => {
      this.price = data;
    });
  }

}
