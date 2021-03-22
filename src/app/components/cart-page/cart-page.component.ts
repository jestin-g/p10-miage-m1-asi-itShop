import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/entities/item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  items: Item[] = [];

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.getItems();
  }

  private getItems() {
    this.cartService.getItems()
      .subscribe(items => this.items = items);
  }

  public getTotalPrice(): number {
    let res = 0;
    this.items.forEach(item => {
      res += item.price;
    });
    return res;
  }

}
