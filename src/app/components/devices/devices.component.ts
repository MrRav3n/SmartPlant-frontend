import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MainService } from '../../core/main/main.service';
import { User } from '../../core/Models/User';
import { Device } from '../../core/Models/Device';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit, AfterViewInit {
  devices: [Device];
  constructor(private main: MainService) { }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    console.log(this.main.getUser);
    this.devices = this.main.getUser.devices;
  }

}
