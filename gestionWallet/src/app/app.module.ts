import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashbordComponent } from './dashbord/dashbord.component';
import { GestionSubsciberComponent } from './gestion-subsciber/gestion-subsciber.component';
import { GestionWalletComponent } from './gestion-wallet/gestion-wallet.component';
import { HttpBackend, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    DashbordComponent,
    GestionSubsciberComponent,
    GestionWalletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
