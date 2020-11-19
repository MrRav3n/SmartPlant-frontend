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
  openEdit = new EventEmitter();

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
  openEditEmit() {
    this.openEdit.emit('');
  }
  openRegisterEmit() {
    this.openRegister.emit('');
  }
}
