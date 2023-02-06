import { HomeComponent } from './views/home/home.component';
import { Router, Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './views/login/login.module';
import { RegisterComponent } from './views/register/register.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children: [
      {path: '',component: HomeComponent},
      {path: 'home',component: HomeComponent},
      {path:'register',component:RegisterComponent},
    ]
  },
  {path:'login',loadChildren:() => import('./views/login/login.module').then(m=>m.LoginModule)},

];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
