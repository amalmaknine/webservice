import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { GestionSubsciberComponent } from './gestion-subsciber/gestion-subsciber.component';
import { GestionWalletComponent } from './gestion-wallet/gestion-wallet.component';

const routes: Routes = [
  { path: "login", component: AuthentificationComponent },
  { path: "", component: AuthentificationComponent },
  { path: "dashbord", component: DashbordComponent },
  { path: "gestionSubscriber", component: GestionSubsciberComponent },
  { path: "gestionWallet", component: GestionWalletComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
