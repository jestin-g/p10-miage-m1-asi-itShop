import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './components/items/items.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: ItemsComponent },
  { path: 'ordinateurs', component: ItemsComponent, data: { category: 'pc', categoryLabel: 'Ordinateur' }},
  { path: 'ordinateurs/portable', component: ItemsComponent, data: { category: 'pc-portable', categoryLabel: 'Ordinateurs Portables' }},
  { path: 'ordinateurs/bureau', component: ItemsComponent, data: { category: 'pc-bureau', categoryLabel: 'Ordinateurs de Bureau' }},
  { path: 'ordinateurs/accessoires', component: ItemsComponent, data: { category: 'pc-accessoire', categoryLabel: 'Accessoires d\'ordinateurs' }},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
