import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './view/index/index.component'
import {HotStockComponent} from './view/hot-stock/hot-stock.component'
import {ChooseComponent} from './view/choose/choose.component'

const routes: Routes = [
  {
    path:'',
    component:IndexComponent
  },
  {
    path:'hotStock',
    component:HotStockComponent
  },
  {
    path:'search',
    component:ChooseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
