import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemComponent } from './components/item/item.component';
import { ComponentFormulaireComponent } from './component-formulaire/component-formulaire.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemsComponent,
    ItemComponent,
    ComponentFormulaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
