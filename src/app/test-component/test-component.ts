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
  animations: [],
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
    this.dialog.openDialog()
    
  }

   elemList: string[] = []

  openDialog() {
    this.isDialogOpen = true;
    this.isDropShadowOpen = true;
  }

  handleCloseDialog() {
    this.isDialogOpen = false;
    this.isDropShadowOpen = false;
  }
  
}
