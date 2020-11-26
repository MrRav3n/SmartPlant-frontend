import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalsService } from '../../../core/modals/modals.service';
import { MainService } from '../../../core/main/main.service';
import { Device } from '../../../core/Models/Device';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-plant-modal',
  templateUrl: './add-plant-modal.component.html',
  styleUrls: ['./add-plant-modal.component.scss']
})
export class AddPlantModalComponent implements OnInit {
  @ViewChild('addPlantModal') addPlantModal;
  submitted = false;
  addPlantForm: FormGroup;
  devices: [Device];
  constructor(
    private modals: ModalsService,
    private main: MainService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.modals.openAddPlant.subscribe(() => {
      this.addPlantModal.nativeElement.click();
      const deviceUrl = this.router.url.split('/');
      const index = deviceUrl[deviceUrl.length - 1];
      const deviceId = this.main.getUser.devices[index].id;
      this.addPlantForm.setControl('deviceId', new FormControl(deviceId));
    });
    const url = this.router.url.split('/');
    console.log(url);
    this.addPlantForm = new FormGroup({
      name: new FormControl('Roślinka', Validators.required),
      level: new FormControl('', Validators.required),
      deviceId: new FormControl('', Validators.required)
    });
  }
  add() {
    this.submitted = true;
    if (this.addPlantForm.valid) {
      this.main.addPlant(this.addPlantForm.value);
    }
  }
}
