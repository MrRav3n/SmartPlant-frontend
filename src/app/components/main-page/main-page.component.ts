import { Component, OnInit } from '@angular/core';
import { MainService } from '../../core/main/main.service';
import { User } from '../../core/Models/User';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalsService } from '../../core/modals/modals.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  user: User;
  constructor(
    private main: MainService,
    private location: Location,
    private router: Router,
    private modalsService: ModalsService
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
      this.modalsService.openAddDeviceEmit();
    } else {
      this.modalsService.openAddPlantEmit();
    }

  }

}
