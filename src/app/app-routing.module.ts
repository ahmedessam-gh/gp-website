import { HomeComponent } from './views/home/home.component';
import { Router, Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './views/login/login.module';
import { HeadFootComponent } from './views/head-foot/head-foot.component';
import { CheckoutComponent } from './views/cart/checkout/checkout.component';
import { ProfileModule } from './views/profile/profile.module';
import { ProfileDetailsComponent } from './views/profile/profile-details/profile-details.component';
const routes: Routes = [
  {
    path: '',
    component: HeadFootComponent,
    children: [
      { path: '',
        loadChildren: () =>
          import('./views/home/home.module').then((m) => m.HomeModule)
      },
      { path: 'home', redirectTo: '', pathMatch: 'full'},
      { path: 'checkout', component: CheckoutComponent },
      {
        path: 'cart',
        loadChildren: () =>
          import('./views/cart/cart.module').then((m) => m.CartModule),
      },
      {
        path: 'about-us',
        loadChildren: () =>
          import('./views/about-us/about-us.module').then(
            (m) => m.AboutUsModule
          ),
      },
      {
        path: 'contact-us',
        loadChildren: () =>
          import('./views/contact-us/contact-us.module').then(
            (m) => m.ContactUsModule
          ),
      },
      {
        path: 'report',
        loadChildren: () =>
          import('./views/report/report.module').then(
            (m) => m.ReportModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./views/profile/profile.module').then((m) => m.ProfileModule),
      },
      {
        path: 'trace-order/:orderNumber',
        loadChildren: () =>
          import('./views/trace-order/trace-order.module').then(
            (m) => m.TraceOrderModule
          ),
      },
      {
        path: 'shop',
        loadChildren: () =>
          import('./views/shop/shop.module').then((m) => m.ShopModule),
      },
    ],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./views/login/login.module').then((m) => m.LoginModule),
  },

  {
    path: 'error-404',
    loadChildren: () =>
      import('./views/error404/error404.module').then((m) => m.Error404Module),
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
