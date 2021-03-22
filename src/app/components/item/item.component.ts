import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/entities/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  item?: Item;

  constructor(private itemService: ItemService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getItem();
  }

  private getItem(): void {

    const id = +this.route.snapshot.paramMap.get('id')!;

    this.itemService.getItemById(id)
      .subscribe(item => this.item = item);
  }

}
