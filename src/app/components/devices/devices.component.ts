import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MainService } from '../../core/main/main.service';
import { User } from '../../core/Models/User';
import { Device } from '../../core/Models/Device';
import { Router } from '@angular/router';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit, AfterViewInit {
  devices: [Device];
  userName: string;
  constructor(
    private main: MainService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    console.log(this.main.getUser);
    this.devices = this.main.getUser.devices;
    this.userName = this.main.getUser.firstName;
  }
  nextStep(i: number) {
    this.router.navigateByUrl(`logged/plants/${i}`);
  }
  delete(i) {
    const deviceId = this.devices[i].id;
    this.main.deleteDevice(deviceId, i);
  }

}



