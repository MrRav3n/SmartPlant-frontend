import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plant } from '../../core/Models/Plant';
import { switchMap } from 'rxjs/operators';
import { MainService } from '../../core/main/main.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss']
})
export class PlantsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private main: MainService
  ) { }
  plants: [Plant];
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.plants = this.main.getUser.devices[id].plants;
  }
  nextStep(id: number) {
    this.router.navigate([`${id}`], { relativeTo: this.route });
  }
}
