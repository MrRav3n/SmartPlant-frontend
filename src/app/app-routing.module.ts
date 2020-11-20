import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { DevicesComponent } from './components/devices/devices.component';
import { PlantsComponent } from './components/plants/plants.component';
import { AuthGuard } from './core/guards/auth.guard';
import { SinglePlantComponent } from './components/single-plant/single-plant.component';
import { WelcomeAuthGuard } from './core/guards/welcome-auth.guard';


const routes: Routes = [
  {path: '', component: WelcomeComponent, canActivate: [WelcomeAuthGuard]},
  {path: 'logged', component: MainPageComponent, canActivate: [AuthGuard], children: [
      {path: '', component: DevicesComponent, pathMatch: 'full'},
      {path: 'plants/:id', component: PlantsComponent},
      {path: 'plants/:id/:singleId', component: SinglePlantComponent},
    ]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
