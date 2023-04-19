import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop.component';

const routes: Routes = [
  { path: '', component: ShopComponent },
  {
    path: 'product/:prodid',
    loadChildren: () =>
      import('./product/product.module').then((m) => m.ProductModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
