import { Component, OnInit } from '@angular/core';
import { ModalsService } from '../../../core/modals/modals.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private modals: ModalsService
  ) { }

  ngOnInit(): void {
  }
  login() {
    this.modals.openLoginEmit();
  }
}
