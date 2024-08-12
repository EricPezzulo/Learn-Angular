import { Component, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ReusableDialogComponent } from '../reusable-dialog/reusable-dialog.component';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-test-component',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule, ReusableDialogComponent],
  templateUrl: './test-component.html',
  animations: [
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
  ],
})
export class TestComponent {
  isOpen: boolean = false;
  isDialogOpen: boolean = false;
  isDropShadowOpen: boolean = false;
  toastMsg: string = '';
  inputText: string = '';

  @ViewChild(ReusableDialogComponent) dialog!: ReusableDialogComponent;

  toggle(message: string) {
    this.toastMsg = message;
    this.isOpen = !this.isOpen;
    setTimeout(() => {
      this.isOpen = false;
    }, 3000);
  }
  toggleDialog() {
    // this.isDropShadowOpen = true;
    // this.isDialogOpen = true;
    this.dialog.openDialog();
  }

  elemList: elemListType[] = [];

  deleteElem(id: string) {
    this.elemList = this.elemList.filter((el) => el.id !== id);
    console.log(this.elemList);
  }

  handleStatus(id: string) {
    const taskElement = document.getElementById('task')
    const item = this.elemList.find((el) => el.id === id);
    if (item) {
      item.completed = !item.completed;
    }

    console.log(this.elemList)
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
