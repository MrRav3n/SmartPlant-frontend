import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../Models/User';
import { SharedService } from '../shared/shared.service';
import { ModalsService } from '../modals/modals.service';
import { ToastrService } from 'ngx-toastr';
import { InterceptorSkipHeader } from '../interceptor/http-error.interceptor';
const skip = new HttpHeaders().set(InterceptorSkipHeader, '');
@Injectable({
  providedIn: 'root'
})
export class MainService {
  private user: User;
  apiUrl = 'https://api-smart-plant.herokuapp.com/api/';
  constructor(
    private http: HttpClient,
    private shared: SharedService,
    private modals: ModalsService,
    private toastr: ToastrService
  ) {

  }
  public get getUser(): User {
    return this.user;
  }
  public isUserLogged() {
    return !!this.user;
  }
  logout() {
    this.user = null;
    localStorage.removeItem('Token');
  }
  login(userCred) {
    this.http.post<User>(this.apiUrl + 'user/login', userCred).subscribe((res: User) => {
      this.modals.openLoginEmit();
      localStorage.setItem('Token', res.token);
      this.user = res;
      console.log(this.user);
    });
  }
  register(userCred) {
    this.http.post<User>(this.apiUrl + 'user/register', userCred).subscribe((res: User) => {
      this.modals.openRegisterEmit();
      this.toastr.success('Pomyślnie zarejestorwano.', 'Udało się!');
      this.user = res;
      console.log(this.user);
    });
  }
  loginViaToken() {
    this.http.get<User>(this.apiUrl + 'user/loginViaToken', { headers: skip }).subscribe((res: User) => {
      this.user = res;
      console.log(this.user);
    });
  }
}
