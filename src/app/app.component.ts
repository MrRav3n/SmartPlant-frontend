import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MainService } from './core/main/main.service';
import { SharedService } from './core/shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(
    public main: MainService,
    public shared: SharedService
  ) {
  }

  ngOnInit() {
    const token = localStorage.getItem('Token');
    if (token) {
      this.main.loginViaToken();
    }
  }
  ngAfterViewInit() {
    this.shared.loading = false;
  }
}
