import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalsService {
  openLogin = new EventEmitter();
  openRegister = new EventEmitter();
  openAddDevice = new EventEmitter();
  openAddPlant = new EventEmitter();
  openYouSure = new EventEmitter();
  openEditDevice = new EventEmitter();
  openEditPlant = new EventEmitter();

  constructor() { }

  openLoginEmit() {
    this.openLogin.emit('');
  }
  openAddDeviceEmit() {
    this.openAddDevice.emit('');
  }
  openAddPlantEmit() {
    this.openAddPlant.emit('');
  }
  openYouSureEmit() {
    this.openYouSure.emit('');
  }
  openEditDeviceEmit(id: number) {
    this.openEditDevice.emit(id);
  }
  openEditPlantEmit(id: number, level: number) {
    this.openEditPlant.emit({id, level});
  }
  openRegisterEmit() {
    this.openRegister.emit('');
  }
}
