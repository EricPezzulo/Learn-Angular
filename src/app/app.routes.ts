import { Routes, UrlSegment } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user-page/:id', component: UserPageComponent },

  {
    matcher: (url) => {
      if (url.length === 1 && url[0].path.match(/^@[\w]+$/gm)) {
        return {
          consumed: url,
          posParams: { firstName: new UrlSegment(url[0].path.slice(1), {}) },
        };
      }
      return null;
    },
    component: UserPageComponent,
  },
];
