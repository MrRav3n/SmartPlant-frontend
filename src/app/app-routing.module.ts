import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { DevicesComponent } from './components/devices/devices.component';
import { PlantsComponent } from './components/plants/plants.component';
import { AuthGuard } from './core/guards/auth.guard';


const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'logged', component: MainPageComponent, canActivate: [AuthGuard], children: [
      {path: '', component: DevicesComponent, pathMatch: 'full'},
      {path: 'plants', component: PlantsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
