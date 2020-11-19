import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalsService } from '../../../core/modals/modals.service';
import { MainService } from '../../../core/main/main.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-device-modal',
  templateUrl: './add-device-modal.component.html',
  styleUrls: ['./add-device-modal.component.scss']
})
export class AddDeviceModalComponent implements OnInit {
  @ViewChild('addDeviceModal') addDeviceModal;
  submitted = false;
  addDeviceForm: FormGroup;
  constructor(
    private modals: ModalsService,
    private main: MainService
  ) {}

  ngOnInit(): void {
    this.modals.openAddDevice.subscribe(() => {
      this.addDeviceModal.nativeElement.click();
    });
    this.addDeviceForm = new FormGroup({
      name: new FormControl('123', Validators.required),
      secretKey: new FormControl('123', Validators.required)
    });
  }
  add() {
    this.submitted = true;
    if (this.addDeviceForm.valid) {
      this.main.addDevice(this.addDeviceForm.value);
    }
  }
}
