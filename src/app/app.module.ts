import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModalComponent } from './components/modals/login-modal/login-modal.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './core/interceptor/http-error.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AuthInterceptor } from './core/auth/auth.interceptor';
import { RegisterModalComponent } from './components/modals/register-modal/register-modal.component';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';
import { SharedService } from './core/shared/shared.service';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PlantsComponent } from './components/plants/plants.component';
import { DevicesComponent } from './components/devices/devices.component';
import { MainPageComponent } from './components/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginModalComponent,
    NavbarComponent,
    RegisterModalComponent,
    SpinnerComponent,
    WelcomeComponent,
    PlantsComponent,
    DevicesComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,
  ],
  providers: [
    SharedService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
      deps: [ToastrService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
