import { Error404Component } from './views/error404/error404.component';
import { HomeComponent } from './views/home/home.component';
import { Router, Routes, RouterModule,Scroll } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadFootComponent } from './views/head-foot/head-foot.component';
import { CheckoutComponent } from './views/cart/checkout/checkout.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { PaymentComponent } from './shared/payment/payment.component';
const routes: Routes = [
  {
    path: '',
    component: HeadFootComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./views/home/home.module').then((m) => m.HomeModule),
      },
      { path: 'home', redirectTo: '', pathMatch: 'full' },
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
          import('./views/report/report.module').then((m) => m.ReportModule),
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
    path: 'welcome',
    loadChildren: () =>
      import('./views/welcome/welcome.module').then((m) => m.WelcomeModule),
  },

  {
    path: 'error-404',
    component:Error404Component
  },
  { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },
  { path: 'spinner',component:SpinnerComponent},
  { path: '**', component: Error404Component },
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled'}),//enableTracing: true ,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
