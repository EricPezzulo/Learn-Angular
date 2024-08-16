import { Routes } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos-component/todos-component';
import { JeopardyComponent } from './jeopardy/jeopardy.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user-page/:id', component: UserPageComponent },
  { path: 'todo', component: TodosComponent },
  // {path: 'todo/:id', component: TodoComponent}
  {path: 'jeopardy', component: JeopardyComponent }
];
