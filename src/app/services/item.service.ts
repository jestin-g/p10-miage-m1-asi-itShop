import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from '../entities/item';
import { ITEMS } from '../mock-data/mock-items';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private itemsUrl = 'http://localhost:8080/p10-miage-m1-webservice-shop-backend-1.0-SNAPSHOT/api/item/'

  constructor(
    private http: HttpClient,
  ) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl);
  }

  getItemById(id: number): Observable<Item> {
    return this.http.get<Item>(this.itemsUrl + id);
  }

  deleteItemById(id: number): void {
    this.http.delete(this.itemsUrl + id);
  }

  getItemsByCategory(category: string): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl + 'category/' + category);
  }

  getItemsByMainCategory(category: string): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl + 'maincategory/' + category);
  }

}
