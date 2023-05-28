import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SubsciberService {

  baseUrl = "http://localhost:9092/userService";

  constructor(private http: HttpClient) {
  }

  getAllSubscribers() {

    return this.http.get(this.baseUrl + '/getAllUsers');

  }
  search() {

    return this.http.get(this.baseUrl + '/ListLotCarte');

  }
  delete() {

    return this.http.get(this.baseUrl + '/ListEtatCarte');

  }
  update() {

    return this.http.get(this.baseUrl + '/ListEtatCarte');

  }




}
