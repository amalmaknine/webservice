import { Component } from '@angular/core';


@Component({
  selector: 'app-gestion-subsciber',
  templateUrl: './gestion-subsciber.component.html',
  styleUrls: ['./gestion-subsciber.component.css']
})
export class GestionSubsciberComponent {

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
