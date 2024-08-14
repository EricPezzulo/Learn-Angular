import { Component, ViewChild } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ReusableDialogComponent } from '../reusable-dialog/reusable-dialog.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
@Component({
  selector: 'app-test-component',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    ReusableDialogComponent,
    NgClass,
    TodoItemComponent,
  ],
  templateUrl: './test-component.html',
})
export class TestComponent {
  isOpen: boolean = false;
  isDialogOpen: boolean = false;
  isDropShadowOpen: boolean = false;
  toastMsg: string = '';
  inputText: string = '';

  @ViewChild(ReusableDialogComponent) dialog!: ReusableDialogComponent;
  elemList: elemListType[] = [];
  toggle(message: string) {
    this.toastMsg = message;
    this.isOpen = !this.isOpen;
    setTimeout(() => {
      this.isOpen = false;
    }, 3000);
  }
  toggleDialog() {
    this.dialog.openDialog();
  }

  openDialog() {
    this.isDialogOpen = true;
    this.isDropShadowOpen = true;
  }

  handleCloseDialog() {
    this.isDialogOpen = false;
    this.isDropShadowOpen = false;
  }
}

export interface elemListType {
  id: string;
  item: string;
  completed: boolean;
}
