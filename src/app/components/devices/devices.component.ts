import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MainService } from '../../core/main/main.service';
import { User } from '../../core/Models/User';
import { Device } from '../../core/Models/Device';
import { Router } from '@angular/router';
import { ModalsService } from '../../core/modals/modals.service';

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
    private router: Router,
    private modals: ModalsService
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
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
  edit(i) {
    const deviceId = this.devices[i].id;
    this.modals.openEditDeviceEmit(deviceId);
  }

}



