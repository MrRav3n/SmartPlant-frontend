import { AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import { Plant } from '../../core/Models/Plant';
import { MainService } from '../../core/main/main.service';
import { ActivatedRoute } from '@angular/router';
import { Measurement } from '../../core/Models/Measurement';
import * as Chart from 'chart.js';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-single-plant',
  templateUrl: './single-plant.component.html',
  styleUrls: ['./single-plant.component.scss']
})
export class SinglePlantComponent implements OnInit, AfterViewChecked {
  @ViewChild('chart') chart;
  submitted;
  canvas;
  chartForm: FormGroup;
  ctx;
  myChart;
  measurements: [Measurement];
  plant: Plant;
  measurementsChecked = false;
  currentlyShowing: string;
  constructor(
    private main: MainService,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    const singleId = this.route.snapshot.paramMap.get('singleId');
    const id = this.route.snapshot.paramMap.get('id');
    this.plant = this.main.getUser.devices[id].plants[singleId];

    this.main.getMeasurements(this.plant.id, 8).subscribe(res => {
      this.measurements = res;
      if (res[0]) {
        this.whatToShow('temperature');
      } else {
        this.measurementsChecked = true;
      }
    });
    this.chartForm = new FormGroup({
      amount: new FormControl('', Validators.required),
    });
  }
  ngAfterViewChecked(): void {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
  }
  send() {
    this.submitted = true;
    this.main.getMeasurements(this.plant.id, this.chartForm.controls.amount.value).subscribe(res => {
      this.measurements = res;
      if (res[0]) {
        this.whatToShow('temperature');
      } else {
        this.measurementsChecked = true;
      }
    });
  }
  whatToShow(nameOfVariable: string) {
    this.currentlyShowing = nameOfVariable;
    if (this.myChart) {
      this.myChart.destroy();
    }
    const data = [];
    const labels = [];
    this.measurements.map(x => {
      data.push(x[nameOfVariable]);
      const date = new Date();
      labels.push(date.toLocaleTimeString());
    });
    const config = {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: nameOfVariable,
          data,
          backgroundColor: [
            'rgb(226,92,4, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          display: false
        },
        responsive: true,
        display: true
      }
    };
    this.myChart = new Chart(this.ctx, config);
  }
}
