import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemComponent } from './components/item/item.component';
import { AuthModule } from './auth/auth.module';
import { CartComponent } from './components/cart/cart.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ModificationItemComponent } from './components/modification-item/modification-item.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemsComponent,
    ItemComponent,
    CartComponent,
    CartPageComponent
    ModificationItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
