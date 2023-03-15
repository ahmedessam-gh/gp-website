import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraceOrderComponent } from './trace-order.component';

const routes: Routes = [{ path: '', component: TraceOrderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TraceOrderRoutingModule { }
