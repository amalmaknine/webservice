import { Component } from '@angular/core';
import { SubsciberService } from '../services/subsciber.service';


@Component({
  selector: 'app-gestion-subsciber',
  templateUrl: './gestion-subsciber.component.html',
  styleUrls: ['./gestion-subsciber.component.css']
})

export class GestionSubsciberComponent {


  subscribers: any;



  constructor(private subsciberService: SubsciberService) { }
  ngOnInit(): void {

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
