import { Component } from '@angular/core';


@Component({
  selector: 'app-gestion-wallet',
  templateUrl: './gestion-wallet.component.html',
  styleUrls: ['./gestion-wallet.component.css']
})
export class GestionWalletComponent {



  wallet!: Array<any>

  ngOnInit(): void {

    this.wallet = [
      { id: 1, num: 12345, balance: 205, amount: 500 },
      { id: 2, num: 223697, balance: 20, amount: 200 },
      { id: 3, num: 69636, balance: 100, amount: 100 },
      { id: 4, num: 178965, balance: 50, amount: 300 },
      { id: 5, num: 15678, balance: 30, amount: 400 },
      { id: 6, num: 99634, balance: 60, amount: 250 }
    ]
  }
}
