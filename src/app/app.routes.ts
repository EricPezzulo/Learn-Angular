import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JeopardyComponent } from './jeopardy/jeopardy.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'jeopardy', component: JeopardyComponent },
];
