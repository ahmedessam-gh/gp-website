import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { LoginnComponent } from './loginn/loginn.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  {
    path:'', component: WelcomeComponent,
    children: [
      { path:'loginn',component:LoginnComponent },
      { path:'register',
        loadChildren:()=>import('./register/register.module').then(m=>m.RegisterModule)
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
