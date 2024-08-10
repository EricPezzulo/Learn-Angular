import { Routes, UrlSegment } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';
import { HomeComponent } from './home/home.component';
import { TestComponentComponent } from './test-component/test-component.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user-page/:id', component: UserPageComponent },
  { path: 'test', component: TestComponentComponent }
];
