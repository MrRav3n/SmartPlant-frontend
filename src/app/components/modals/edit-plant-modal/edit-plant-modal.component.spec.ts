import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlantModalComponent } from './edit-plant-modal.component';

describe('EditPlantModalComponent', () => {
  let component: EditPlantModalComponent;
  let fixture: ComponentFixture<EditPlantModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPlantModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlantModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
