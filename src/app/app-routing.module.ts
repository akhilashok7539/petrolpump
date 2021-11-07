import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { AddAccountsComponent } from './accounts/add-accounts/add-accounts.component';
import { UpdateAccountsComponent } from './accounts/update-accounts/update-accounts.component';
import { AddFuelRatesComponent } from './dailyrates/add-fuel-rates/add-fuel-rates.component';
import { DailyratesComponent } from './dailyrates/dailyrates.component';
import { UpdateFuelRatesComponent } from './dailyrates/update-fuel-rates/update-fuel-rates.component';
import { HomeComponent } from './home/home.component';
import { AddLoadQuantityComponent } from './loadquantiy/add-load-quantity/add-load-quantity.component';
import { LoadquantiyComponent } from './loadquantiy/loadquantiy.component';
import { LoginComponent } from './login/login.component';
import { PetrolpumpboyComponent } from './petrolpumpboy/petrolpumpboy.component';
import { ReadingsComponent } from './readings/readings.component';


const routes: Routes = [
  {path:'',pathMatch:"full",redirectTo:"login"},
  {path:'login',component:LoginComponent},
  {path:'Home',component:HomeComponent},
  {path:'account',component:AccountsComponent},
  {path:'add-account',component:AddAccountsComponent},
  {path:'update-account',component:UpdateAccountsComponent},

  {path:'dailyrates',component:DailyratesComponent},
  {path:'readings',component:ReadingsComponent},
  {path:'load-quantity',component:LoadquantiyComponent},
  {path:'add-load-quantity',component:AddLoadQuantityComponent},

  {path:'petrol-pump-boy',component:PetrolpumpboyComponent},

  {path:'add-dailyrates',component:AddFuelRatesComponent},
  {path:'update-dailyrates',component:UpdateFuelRatesComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
