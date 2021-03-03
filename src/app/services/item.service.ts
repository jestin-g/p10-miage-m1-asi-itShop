import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from '../entities/item';
import { ITEMS } from '../mock-data/mock-items';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getItems(): Observable<Item[]> {
    const items = of(ITEMS);
    return items;
  }

  getItemsByCategory(category: string): Observable<Item[]> {
    let items = ITEMS;
    items = items.filter(item => item.category === category);
    return of(items);
  }

  getItemsByMainCategory(category: string): Observable<Item[]> {
    let items = ITEMS;
    items = items.filter(item => item.category.startsWith(category) != null);
    return of(items);
  }
}
