import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginnComponent } from './loginn.component';

const routes: Routes = [
  {path:'',component:LoginnComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginnRoutingModule { }
