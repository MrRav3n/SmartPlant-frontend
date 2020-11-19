import { Component, OnInit } from '@angular/core';
import { Plant } from '../../core/Models/Plant';
import { MainService } from '../../core/main/main.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-plant',
  templateUrl: './single-plant.component.html',
  styleUrls: ['./single-plant.component.scss']
})
export class SinglePlantComponent implements OnInit {

  constructor(
    private main: MainService,
    private route: ActivatedRoute
  ) { }
  plant: Plant;
  ngOnInit(): void {
    const singleId = this.route.snapshot.paramMap.get('singleId');
    const id = this.route.snapshot.paramMap.get('id');
    this.plant = this.main.getUser.devices[id].plants[singleId];
    console.log(this.plant);
  }

}
