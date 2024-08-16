import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { elemListType } from '../todos-component/todos-component';
import { MatIconModule } from '@angular/material/icon';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
  animations:[
    trigger('addItem', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(100px)' }),
        animate(
          '200ms 200ms',
          style({ opacity: 1, transform: 'translateY(0px)' })
        ),
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateY(0px)' }),
        animate('200ms', style({ opacity: 0, transform: 'translateY(100px)' })),
      ]),
    ]),
  ]
})
export class TodoItemComponent {
  @Input() elemList!: elemListType[];

  handleStatus(id: string) {
    const item = this.elemList.find((el) => el.id === id);
    if (item) {
      item.completed = !item.completed;
    }
  }
  deleteElem(id: string) {
    this.elemList = this.elemList.filter((el) => el.id !== id);
  }
}
