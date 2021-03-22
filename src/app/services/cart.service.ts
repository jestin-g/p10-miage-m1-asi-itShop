import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from '../entities/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Item[] = [];

  constructor() { }

  getItems(): Observable<Item[]> {
    return of(this.items);
  }

  add(item: Item): void {
    if (!this.items.includes(item)) {
      this.items.push(item);
    }
  }

  remove(id: number): void {
    for (let i = 0; i < this.items.length; i++) {
      const element = this.items[i];
      if (element.id == id) {
        this.items.splice(i, 1);
      }
    }
  }

  clear(): void {
    this.items = [];
  }
}
