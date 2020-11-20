import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalsService } from '../../../core/modals/modals.service';
import { MainService } from '../../../core/main/main.service';
import { Device } from '../../../core/Models/Device';

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
  ) {}

  ngOnInit(): void {
    this.modals.openAddPlant.subscribe(() => {
      this.addPlantModal.nativeElement.click();
      this.devices = this.main.getUser.devices;
    });
    this.addPlantForm = new FormGroup({
      name: new FormControl('Roślinka', Validators.required),
      level: new FormControl('', Validators.required),
      deviceId: new FormControl('', Validators.required)
    });
  }
  add() {
    this.submitted = true;
    console.log(this.addPlantForm.valid);
    if (this.addPlantForm.valid) {
      this.main.addPlant(this.addPlantForm.value);
    }
  }
}
