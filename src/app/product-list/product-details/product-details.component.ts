import { Component, OnInit, Input } from '@angular/core';
import { Product, products } from '../../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product|undefined;
  products = products;
  constructor(private route: ActivatedRoute,private cartSetvice: CartService) { }

  ngOnInit() {
    var routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = products.find(p => p.id == productIdFromRoute);
  }

  AddToCart(product:Product)
  {
    this.cartSetvice.addToCart(product);
    alert("product added");
  }

}