import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

import { UserPageComponent } from './user-page/user-page.component';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, UserPageComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'learn-angular';
}
