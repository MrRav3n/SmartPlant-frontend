import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalsService } from '../../../core/modals/modals.service';
import { MainService } from '../../../core/main/main.service';

@Component({
  selector: 'app-edit-plant-modal',
  templateUrl: './edit-plant-modal.component.html',
  styleUrls: ['./edit-plant-modal.component.scss']
})
export class EditPlantModalComponent implements OnInit {
  @ViewChild('editPlantModal') editPlantModal;
  submitted = false;
  editPlantForm: FormGroup;
  id: number;
  constructor(
    private modals: ModalsService,
    private main: MainService,
  ) {}

  ngOnInit(): void {
    this.modals.openEditPlant.subscribe((res) => {
      this.editPlantModal.addControl('id', new FormControl(res.id, Validators.required));
      this.editPlantModal.nativeElement.click();
    });
    this.editPlantModal = new FormGroup({
      name: new FormControl('', Validators.required),
      level: new FormControl('', Validators.required),
    });
  }

  edit() {
    this.submitted = true;
    if (this.editPlantModal.valid) {
      this.main.editPlant(this.editPlantModal.value);
    }
  }
}
