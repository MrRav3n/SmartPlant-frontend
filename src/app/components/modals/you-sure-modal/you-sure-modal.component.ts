import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalsService } from '../../../core/modals/modals.service';
import { MainService } from '../../../core/main/main.service';

@Component({
  selector: 'app-you-sure-modal',
  templateUrl: './you-sure-modal.component.html',
  styleUrls: ['./you-sure-modal.component.scss']
})
export class YouSureModalComponent implements OnInit {
  @ViewChild('youSureModal') youSureModal;
  constructor(
    private modals: ModalsService,
    private main: MainService
  ) {}

  ngOnInit(): void {
    this.modals.openYouSure.subscribe(() => {
      this.youSureModal.nativeElement.click();
    });
  }
  sureCheck(bool: boolean) {
    this.modals.sureConfirmationEmit(bool);
  }
}
