import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { WorkoutService } from '../../services/workout.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-workout-form',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.css'],
})
export class WorkoutFormComponent implements OnInit {
  form: FormGroup;
  isEdit = false;
  workoutId = '';

  constructor(
    private fb: FormBuilder,
    private workoutService: WorkoutService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      workoutType: ['', Validators.required],
      duration: [1, [Validators.required, Validators.min(1)]],
      focus: ['', Validators.required],
      goal: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.workoutId = this.route.snapshot.params['id'];
    this.isEdit = !!this.workoutId;

    if (this.isEdit) {
      this.workoutService.getOne(this.workoutId).subscribe((data) => {
        this.form.patchValue({
          workoutType: data.workoutType,
          duration: data.duration,
          focus: data.focus,
          goal: data.goal,
        });
      });
    }
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    const data = this.form.value;

    if (this.isEdit) {
      this.workoutService.update(this.workoutId, data).subscribe(() => {
        this.router.navigate(['/list']);
      });
    } else {
      this.workoutService.create(data).subscribe(() => {
        this.router.navigate(['/list']);
      });
    }
  }
}
