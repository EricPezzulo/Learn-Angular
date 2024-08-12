import { Routes } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test-component/test-component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user-page/:id', component: UserPageComponent },
  { path: 'test', component: TestComponent }
];
