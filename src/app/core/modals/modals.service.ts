import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalsService {
  openLogin = new EventEmitter();
  openRegister = new EventEmitter();

  constructor() { }

  openLoginEmit() {
    this.openLogin.emit('');
  }
  openRegisterEmit() {
    this.openRegister.emit('');
  }
}
