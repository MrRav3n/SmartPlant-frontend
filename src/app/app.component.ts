import { AfterContentChecked, AfterViewInit, Component, OnInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { MainService } from './core/main/main.service';
import { SharedService } from './core/shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked {
  constructor(
    public main: MainService,
    public shared: SharedService,
    private changeDetector: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    const token = localStorage.getItem('Token');

    if (token) {
      this.main.loginViaToken();
    } else {

      this.shared.loading = false;
    }
  }
  ngAfterViewInit() {

  }
  ngAfterViewChecked() {

    this.changeDetector.detectChanges();
  }
}
