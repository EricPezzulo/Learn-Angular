import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

import { trigger } from '@angular/animations';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  template: '<app-home></app-home>',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'learn-angular';
}
