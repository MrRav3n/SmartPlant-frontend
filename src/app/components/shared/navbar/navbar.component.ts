import { Component, OnInit } from '@angular/core';
import { ModalsService } from '../../../core/modals/modals.service';
import { MainService } from '../../../core/main/main.service';
import { User } from '../../../core/Models/User';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user: User;
  constructor(
    private modals: ModalsService,
    public main: MainService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = this.main.getUser;
  }
  goBack() {
    this.location.back();
  }
  add() {
    const url = this.router.url.split('/');
    if (!url[2]) {
      this.modals.openAddDeviceEmit();
    } else {
      this.modals.openAddPlantEmit();
    }

  }
  logout() {
    this.main.logout();
  }
}
