import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraceOrderComponent } from './trace-order.component';
import { AuthGuard } from 'src/app/core/AuthGuard/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: TraceOrderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TraceOrderRoutingModule {}
