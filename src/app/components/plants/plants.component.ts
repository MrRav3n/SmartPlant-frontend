import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plant } from '../../core/Models/Plant';
import { switchMap } from 'rxjs/operators';
import { MainService } from '../../core/main/main.service';
import { ModalsService } from '../../core/modals/modals.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss']
})
export class PlantsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private main: MainService,
    private modals: ModalsService
  ) { }
  plants: [Plant];
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.plants = this.main.getUser.devices[id].plants;
  }
  nextStep(id: number) {
    this.router.navigate([`${id}`], { relativeTo: this.route });
  }
  delete(i) {
    const plantId = this.plants[i].id;
    this.main.deletePlant(plantId, i);
  }
  edit(i) {
    const plantId = this.plants[i].id;
    const plantLevel = this.plants[i].level;
    this.modals.openEditPlantEmit(plantId, plantLevel);
  }
}
