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
    this.shared.loading = true;
    this.http.get<User>(this.apiUrl + 'user/loginViaToken', { headers: skip }).subscribe((res: User) => {
      this.user = res;
      this.redirect();
      this.shared.loading = false;
    });
  }

  //  Device
  addDevice(device: Device) {
    this.http.post(this.apiUrl + 'device', device).subscribe((res: Device) => {
      this.toastr.success('Pomyślnie dodano nowe urządzenie.', 'Udało się!');
      this.user.devices.push(res);
    });
  }
  editDevice(editDevice: { id: number; name: string; index: number }) {
    this.http.put(this.apiUrl + 'device/' + editDevice.id, {name: editDevice.name}).subscribe((res: Device) => {
      this.toastr.success('Pomyślnie edytowano.', 'Udało się!');
      const i = this.user.devices.findIndex(x => x.id === res.id);
      this.user.devices[i] = res;
    });
  }
  deleteDevice(id: number, index: number) {
    this.http.delete(this.apiUrl + 'device/' + id).subscribe((res: Device) => {
      this.toastr.success('Pomyślnie usunięto urządzenie.', 'Udało się!');
      this.user.devices.splice(index, 1);
    });
  }
  //  Plant
  addPlant(plant: Plant) {
    this.http.post(this.apiUrl + 'plant', plant).subscribe((res: Plant) => {
      this.toastr.success('Pomyślnie dodano nowe urządzenie.', 'Udało się!');
      const i = this.user.devices.findIndex(x => x.id === res.deviceId);
      this.user.devices[i].plants.push(res);
    });
  }
  deletePlant(id: number, index: number) {
    this.http.delete(this.apiUrl + 'plant/' + id).subscribe((res: Plant) => {
      this.toastr.success('Pomyślnie usunięto roślinę.', 'Udało się!');
      const i = this.user.devices.map(e => e.id).indexOf(res.deviceId);
      this.user.devices[i].plants.splice(index, 1);
    });
  }
  editPlant(editPlant: { id: number; name: string; index: number }) {
    this.http.put(this.apiUrl + 'device/' + editPlant.id, editPlant).subscribe((res: Plant) => {
      this.toastr.success('Pomyślnie edytowano.', 'Udało się!');
      const i = this.user.devices.map(e => e.id).indexOf(res.deviceId);
      this.user.devices[i].plants[editPlant.index] = res;
    });
  }
}
