import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent {

  constructor(private router: Router) {

  }
  goToPageDashbord() {
    this.router.navigate(["/dashbord"])
  }


}
