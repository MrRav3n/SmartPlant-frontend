import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../Models/User';
import { SharedService } from '../shared/shared.service';
import { ModalsService } from '../modals/modals.service';
import { ToastrService } from 'ngx-toastr';
import { InterceptorSkipHeader } from '../interceptor/http-error.interceptor';
import { Device } from '../Models/Device';
import { Plant } from '../Models/Plant';
import { Router } from '@angular/router';
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
    private toastr: ToastrService,
    private router: Router
  ) {

  }
  public get getUser(): User {
    return this.user;
  }
  public isUserLogged() {
    return !!this.user;
  }
  redirect() {
    if (this.user) {
      this.router.navigateByUrl('logged');
    } else {
      this.router.navigateByUrl('');
    }
  }
  // User

  logout() {
    this.user = null;
    localStorage.removeItem('Token');
    this.redirect();
  }
  login(userCred) {
    this.http.post<User>(this.apiUrl + 'user/login', userCred).subscribe((res: User) => {
      this.modals.openLoginEmit();
      localStorage.setItem('Token', res.token);
      this.user = res;
      console.log(this.user);
      this.redirect();
    });
  }
  register(userCred) {
    this.http.post<User>(this.apiUrl + 'user/register', userCred).subscribe((res: User) => {
      this.modals.openRegisterEmit();
      this.toastr.success('Pomyślnie zarejestorwano.', 'Udało się!');
      this.user = res;
      console.log(this.user);
      this.redirect();
    });
  }
  loginViaToken() {
    this.http.get<User>(this.apiUrl + 'user/loginViaToken', { headers: skip }).subscribe((res: User) => {
      this.user = res;
      console.log(this.user);
      this.redirect();
    });
  }

  //  Device
  addDevice(device: Device) {
    this.http.post(this.apiUrl + 'device', device).subscribe((res: Device) => {
      this.toastr.success('Pomyślnie dodano nowe urządzenie.', 'Udało się!');
      this.user.devices.push(res);
    });
  }
  editDevice(editDevice) {
    this.http.put(this.apiUrl + 'device' + editDevice.id, {name: editDevice.name}).subscribe((res: Device) => {
      this.toastr.success('Pomyślnie edytowano.', 'Udało się!');
      this.user.devices[editDevice.index] = res;
    });
  }
  deleteDevice(id: number, index: number) {
    this.http.delete(this.apiUrl + 'device' + id).subscribe((res: Device) => {
      this.toastr.success('Pomyślnie usunięto urządzenie.', 'Udało się!');
      this.user.devices[index] = res;
    });
  }

  //  Plant
  addPlant(plant: Plant) {
    this.http.post(this.apiUrl + 'plant', plant).subscribe((res: Plant) => {
      this.toastr.success('Pomyślnie dodano nowe urządzenie.', 'Udało się!');
    });
  }
}
