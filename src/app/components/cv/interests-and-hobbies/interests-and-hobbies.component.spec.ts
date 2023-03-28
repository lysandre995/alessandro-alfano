import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestsAndHobbiesComponent } from './interests-and-hobbies.component';

describe('InterestsAndHobbiesComponent', () => {
  let component: InterestsAndHobbiesComponent;
  let fixture: ComponentFixture<InterestsAndHobbiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestsAndHobbiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterestsAndHobbiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
