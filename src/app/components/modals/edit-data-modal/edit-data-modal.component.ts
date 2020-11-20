import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Device } from '../../../core/Models/Device';
import { ModalsService } from '../../../core/modals/modals.service';
import { MainService } from '../../../core/main/main.service';

@Component({
  selector: 'app-edit-data-modal',
  templateUrl: './edit-data-modal.component.html',
  styleUrls: ['./edit-data-modal.component.scss']
})
export class EditDataModalComponent implements OnInit {
  @ViewChild('editDeviceModal') editDeviceModal;
  submitted = false;
  editDeviceForm: FormGroup;
  id: number;
  constructor(
    private modals: ModalsService,
    private main: MainService,
  ) {}

  ngOnInit(): void {
    this.modals.openEditDevice.subscribe(id => {
      this.editDeviceForm.addControl('id', new FormControl(id, Validators.required));
      this.editDeviceModal.nativeElement.click();
    });
    this.editDeviceForm = new FormGroup({
      name: new FormControl('', Validators.required),
    });
  }

  edit() {
    this.submitted = true;
    if (this.editDeviceForm.valid) {
      this.main.editDevice(this.editDeviceForm.value);
    }
  }
}
