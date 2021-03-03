import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/entities/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[] = [];
  listName: string = "";
  listCategory: string = "";
  isCategorized: boolean = false;
  isMainCategory: boolean = false;

  constructor(private itemService: ItemService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.setData();
    this.getItems();
  }

  private setData(): void {
    this.route.data.subscribe(data => {
      if (data.categoryLabel) {
        this.listName = data.categoryLabel;
      }
      if (data.category) {
        this.listCategory = data.category;
        this.isCategorized = true;
        if (!data.category.includes("-")) {
          this.isMainCategory = true;
        }
      }
    })
  }

  private getItems(): void {
    if (!this.isCategorized) {
      this.getAllItems();
    } else {
      if (!this.isMainCategory) {
        this.itemService.getItemsByCategory(this.listCategory)
          .subscribe(items => this.items = items);
      } else {
        this.itemService.getItemsByMainCategory(this.listCategory)
        .subscribe(items => this.items = items);
      }
    }
  }

  private getAllItems() {
    this.itemService.getItems()
      .subscribe(items => this.items = items);
  }
}
