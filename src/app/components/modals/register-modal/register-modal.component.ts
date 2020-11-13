import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalsService } from '../../../core/modals/modals.service';
import { MainService } from '../../../core/main/main.service';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent implements OnInit {
  @ViewChild('registerModalButton') registerModalButton;
  submitted = false;
  registerForm: FormGroup;

  constructor(
    private modals: ModalsService,
    private main: MainService
  ) {
  }

  ngOnInit(): void {
    this.modals.openRegister.subscribe(() => {
      console.log('open!');
      this.registerModalButton.nativeElement.click();
    });
    this.registerForm = new FormGroup({
      email: new FormControl('jankowalski@wp.pl', [Validators.required, Validators.email]),
      password: new FormControl('123', [Validators.required, Validators.minLength(2)]),
      firstName: new FormControl('Jan', Validators.required),
      lastName: new FormControl('Kowalski', Validators.required)
    });
  }

  login() {
    this.submitted = true;
    if (this.registerForm.valid) {
      this.main.register(this.registerForm.value);
    }
  }
  openLoginModal() {
    this.modals.openLoginEmit();
  }
}
