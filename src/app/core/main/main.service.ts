import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class MainService {
  user;
  apiUrl = 'https://localhost:5001/api/';
  constructor(
    private http: HttpClient
  ) {
    
  }
  login(userCred) {
    console.log(userCred);
    this.http.post(this.apiUrl + 'user/login', userCred).subscribe((res) => {
      console.log(res);
    })
  }
}
