import { Component } from '@angular/core';
import { SubsciberService } from '../services/subsciber.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-gestion-subsciber',
  templateUrl: './gestion-subsciber.component.html',
  styleUrls: ['./gestion-subsciber.component.css']
})

export class GestionSubsciberComponent {


  subscribers: any;
  subscriber!: Array<any>



  constructor(private subsciberService: SubsciberService, private router: Router) { }


  goToPageWallet() {
    this.router.navigate(["/gestionWallet"]);
  }
  ngOnInit(): void {

    this.subscriber = [
      { id: 1, nom: "amal", prenom: "mak", date_naissance: "22-5-1996", cin: 11245678 }
    ]

    this.subsciberService.getAllSubscribers().subscribe((res) => {
      this.subscribers = res;
    });
  }

  deleteSubsciber(s: any) {

    let index = this.subscribers.indexOf(s);
    this.subscribers.slice(index, 1);
  }


  openModel() {
    const modelDiv = document.getElementById("myModal");

    if (modelDiv != null) {

      modelDiv.style.display = "block";

    }
  }



  closeModel() {
    const modelDiv = document.getElementById("myModal");

    if (modelDiv != null) {

      modelDiv.style.display = "none";

    }
  }





}
