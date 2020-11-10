import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalsService } from '../../../core/modals/modals.service';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MainService } from '../../../core/main/main.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  @ViewChild('loginModalButton') loginModalButton;
  loginForm: FormGroup;
  constructor(
    private modals: ModalsService,
    private main: MainService
  ) {
    
  }

  ngOnInit(): void {
    this.modals.openLogin.subscribe(() => {
      console.log('123');
      this.loginModalButton.nativeElement.click();
    })
    this.loginForm = new FormGroup({
      email: new FormControl('jankowalski@wp.pl', [Validators.required, Validators.email]),
      password: new FormControl('123', [Validators.required, Validators.minLength(2)])
    })
  }
  login() {
    if (this.loginForm.valid) {
      this.main.login(this.loginForm.value);
    }
  }
}
