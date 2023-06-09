import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { VendorRegisterComponent } from './vendor-register/vendor-register.component';
import { RegisterComponent } from './register.component';
import { ChooseUserComponent } from './choose-user/choose-user.component';


const routes: Routes = [
  { path: '', component: ChooseUserComponent },
  { path: 'customerRegister', component: CustomerRegisterComponent },
  { path: 'vendorRegister', component: VendorRegisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
