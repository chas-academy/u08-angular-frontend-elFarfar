import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

import { WorkoutFormComponent } from './workout-form.component';
import { WorkoutService } from '../../services/workout.service';

describe('WorkoutFormComponent', () => {
  let component: WorkoutFormComponent;
  let fixture: ComponentFixture<WorkoutFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [WorkoutFormComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: {} } },
        },
        {
          provide: Router,
          useValue: { navigate: jasmine.createSpy('navigate') },
        },
        {
          provide: WorkoutService,
          useValue: {
            getOne: () => of({}),
            create: () => of({}),
            update: () => of({}),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkoutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('form should be valid when filled out correctly', () => {
    component.form.setValue({
      trainingType: 'Cardio',
      duration: 45,
      focus: 'Kondition',
      goal: 'Springa 5km',
      date: '2025-05-15',
    });
    expect(component.form.valid).toBeTrue();
  });
});
