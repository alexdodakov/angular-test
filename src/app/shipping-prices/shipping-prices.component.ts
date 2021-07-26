import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping-prices',
  templateUrl: './shipping-prices.component.html',
  styleUrls: ['./shipping-prices.component.css']
})
export class ShippingPricesComponent implements OnInit {

  public prices:Observable<{type:string, price:number}[]>;
  constructor(private cartService: CartService) {
    this.prices = cartService.getShippingPrices();
   }

  ngOnInit() {
  }

}