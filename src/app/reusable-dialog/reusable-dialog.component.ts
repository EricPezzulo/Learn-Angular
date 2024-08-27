import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-reusable-dialog',
  templateUrl: './reusable-dialog.component.html',
  styleUrls: ['./reusable-dialog.component.css'],
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('openDialog', [
      state('open', style({ opacity: 1, transform: 'translateY(0px)' })),
      state('closed', style({ opacity: 0, transform: 'translateY(35px)' })),
      transition('open <=> closed', animate('100ms')),
    ]),
    trigger('openBackdrop', [
      state('open', style({ opacity: 1, zIndex: 50 })),
      state('closed', style({ opacity: 0, zIndex: -50 })),
      transition('open <=> closed', animate('200ms')),
    ]),
  ],
})
export class ReusableDialogComponent {
  isOpen: boolean = false;
  isBackdropOpen: boolean = false;

  inputValue: string = '';

  @ViewChild('inputElement') inputElement!: ElementRef;

  private focusInput() {
    if (this.inputElement) {
      this.inputElement.nativeElement.focus();
    }
  }
  openDialog() {
    this.isBackdropOpen = true;
    this.isOpen = true;
    this.focusInput();
  }
  closeDialog() {
    this.isBackdropOpen = false;
    this.isOpen = false;
    this.clearInput();
  }
  handleChange(e: Event) {
    const inputElement = e.target as HTMLInputElement;
    this.inputValue = inputElement.value;
  }
  submit() {
    const newItem = { id: uuidv4(), item: this.inputValue, completed: false };
    // this.elemList.push(newItem);
    this.clearInput();
    this.closeDialog();
    // console.log(this.elemList)
  }
  clearInput() {
    this.inputElement.nativeElement.value = '';
  }
}
