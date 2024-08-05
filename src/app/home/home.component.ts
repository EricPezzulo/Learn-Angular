import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeComponent],
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
