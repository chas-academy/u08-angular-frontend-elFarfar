import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    this.http
      .post<any>('https://u05-api.onrender.com/api/auth/register', {
        email: this.email,
        password: this.password,
      })
      .subscribe({
        next: () => this.router.navigate(['/login']),
        error: (err) => {
          console.error(err);
          this.errorMessage =
            err.error?.message || 'Något gick fel vid registrering.';
        },
      });
  }
}
