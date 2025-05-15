import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';
import { WorkoutFormComponent } from './components/workout-form/workout-form.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: WorkoutFormComponent },
  { path: 'edit/:id', component: WorkoutFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'list', component: WorkoutListComponent },
];
export const appRouterProviders = [
  provideRouter(routes)
];
