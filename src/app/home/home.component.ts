import { Component, Input } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { CommonModule } from '@angular/common';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeComponent, UserComponent, CommonModule, DialogComponent],
  templateUrl: './home.component.html',
  // styleUrl: './home.component.css',
})
export class HomeComponent {
  count: number = 0;
  error: string = '';
  limit: number = 10;

  increment = () => {
    if (this.count >= this.limit) {
      this.error = `Count may not exceed ${this.limit}`;
      return;
    }
    this.count++;
    this.error = '';
  };
  decrement = () => {
    if (this.count <= 0) {
      this.error = 'Count may not be a negative number';
      return;
    }
    this.count--;
    this.error = '';
  };
  onChange(e: any) {
    console.log(e.target.value);
    this.limit = e.target.value;
  }
}
