import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { DailyratesComponent } from './dailyrates/dailyrates.component';
import { AccountsComponent } from './accounts/accounts.component';
import { PetrolpumpboyComponent } from './petrolpumpboy/petrolpumpboy.component';
import { LoadquantiyComponent } from './loadquantiy/loadquantiy.component';
import { ReadingsComponent } from './readings/readings.component';
import { AddAccountsComponent } from './accounts/add-accounts/add-accounts.component';
import { UpdateAccountsComponent } from './accounts/update-accounts/update-accounts.component';
import { ApiservicesService } from './_services/apiservices.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddLoadQuantityComponent } from './loadquantiy/add-load-quantity/add-load-quantity.component';
import { AddFuelRatesComponent } from './dailyrates/add-fuel-rates/add-fuel-rates.component';
import { UpdateFuelRatesComponent } from './dailyrates/update-fuel-rates/update-fuel-rates.component';
import { ViewReadingComponent } from './readings/view-reading/view-reading.component';
import { UpdateLoadquantityComponent } from './loadquantiy/update-loadquantity/update-loadquantity.component';
import { ViewPdfReportsComponent } from './readings/view-pdf-reports/view-pdf-reports.component';

@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent,
    HeaderComponent,
    DailyratesComponent,
    AccountsComponent,
    PetrolpumpboyComponent,
    LoadquantiyComponent,
    ReadingsComponent,
    AddAccountsComponent,
    UpdateAccountsComponent,
    AddLoadQuantityComponent,
    AddFuelRatesComponent,
    UpdateFuelRatesComponent,
    ViewReadingComponent,
    UpdateLoadquantityComponent,
    ViewPdfReportsComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [ApiservicesService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents:[ViewReadingComponent,UpdateLoadquantityComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
