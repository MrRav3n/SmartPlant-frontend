import { Component, OnInit } from '@angular/core';
import { ModalsService } from '../../core/modals/modals.service';
import { MainService } from '../../core/main/main.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private modals: ModalsService,
    public main: MainService
  ) {
  }

  ngOnInit(): void {
    this.loginOpen();
  }

  loginOpen() {
    this.modals.openLoginEmit();
  }

  registerOpen() {
    this.modals.openRegisterEmit();
  }

  logout() {
    this.main.logout();
  }
}
