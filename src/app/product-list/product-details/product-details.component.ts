import { Component, OnInit, Input } from '@angular/core';
import { Product, products } from '../../products';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product|undefined;
  products = products;
  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
    var routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = products.find(p => p.id == productIdFromRoute);
  }

}