import { Component, OnInit } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  //products: Product[];
  constructor() { }

  ngOnInit() {
  }

}