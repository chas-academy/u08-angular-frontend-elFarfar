import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutService } from '../../services/workout.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-workout-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './workout-list.component.html',
  styleUrl: './workout-list.component.css',
})
export class WorkoutListComponent implements OnInit {
  workouts: any[] = [];

  constructor(private workoutService: WorkoutService, private router: Router) {}


  ngOnInit(): void {
    this.workoutService.getAllWorkouts().subscribe((data) => {
      this.workouts = data;
    });
  }

  goToCreate() {
    this.router.navigate(['/create'])
  }
  deleteWorkout(id: string): void {
    if (confirm('Är du säker på att du vill ta bort detta pass?')) {
      this.workoutService.delete(id).subscribe(() => {
        this.workouts = this.workouts.filter((w) => w._id !== id);
      });
    }
  }

  editWorkout(id: string): void {
    this.router.navigate(['/edit', id]);
  }
}

