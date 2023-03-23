import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesAndTrainingComponent } from './courses-and-training.component';

describe('CoursesAndTrainingComponent', () => {
  let component: CoursesAndTrainingComponent;
  let fixture: ComponentFixture<CoursesAndTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesAndTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesAndTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
