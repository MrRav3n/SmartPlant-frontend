import { Component, OnInit } from '@angular/core';
import { ModalsService } from '../../../core/modals/modals.service';
import { MainService } from '../../../core/main/main.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private modals: ModalsService,
    public main: MainService
  ) { }

  ngOnInit(): void {
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
