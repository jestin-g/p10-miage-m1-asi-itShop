import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './components/item/item.component';
import { ItemsComponent } from './components/items/items.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },

  { path: '', component: ItemsComponent, data: { categoryLabel: 'Tous les produits' } },

  { path: 'produit/:id', component: ItemComponent },

  { path: 'ordinateurs', component: ItemsComponent, data: { category: 'pc', categoryLabel: 'Ordinateurs' } },
  { path: 'ordinateurs/portable', component: ItemsComponent, data: { category: 'pc-portable', categoryLabel: 'Ordinateurs Portables' } },
  { path: 'ordinateurs/bureau', component: ItemsComponent, data: { category: 'pc-bureau', categoryLabel: 'Ordinateurs de Bureau' } },
  { path: 'ordinateurs/accessoires', component: ItemsComponent, data: { category: 'pc-accessoire', categoryLabel: 'Accessoires d\'ordinateurs' } },

  { path: 'telephonies', component: ItemsComponent, data: { category: 'tel', categoryLabel: 'Téléphonies' } },
  { path: 'telephonies/smartphones', component: ItemsComponent, data: { category: 'tel-smartphones', categoryLabel: 'Smartphones' } },
  { path: 'telephonies/fixes', component: ItemsComponent, data: { category: 'tel-fixes', categoryLabel: 'Téléphones fixes' } },
  { path: 'telephonies/accessoires', component: ItemsComponent, data: { category: 'tel-accessoire', categoryLabel: 'Accessoires de téléphonies' } },

  { path: 'stockages', component: ItemsComponent, data: { category: 'stock', categoryLabel: 'Stockages' } },
  { path: 'stockages/disques-durs', component: ItemsComponent, data: { category: 'stock-dd', categoryLabel: 'Disques durs' } },
  { path: 'stockages/cle-usb', component: ItemsComponent, data: { category: 'stock-usb', categoryLabel: 'Clé USB' } },
  { path: 'stockages/accessoires', component: ItemsComponent, data: { category: 'stock-accessoire', categoryLabel: 'Accessoires de stockage' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
