import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './view/index/index.component';
import { HotStockComponent } from './view/hot-stock/hot-stock.component';
import { ChooseComponent } from './view/choose/choose.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HotStockComponent,
    ChooseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
