import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/entities/item';

@Component({
  selector: 'app-modification-item',
  templateUrl: './modification-item.component.html',
  styleUrls: ['./modification-item.component.css']
})
export class ModificationItemComponent implements OnInit {
  item?: Item;
  label: string ="";
  brand: string = "";
  category: string = "";
  price: number = 0;
  picture: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
