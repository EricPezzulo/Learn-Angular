import { Component, input } from '@angular/core';
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

@Component({
  selector: 'app-test-component',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule],
  templateUrl: './test-component.component.html',
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          opacity: 1,
        })
      ),
      state(
        'closed',
        style({
          // height: '100px',
          opacity: 0,
          transform: 'translatey(35px)',
        })
      ),
      transition('open => closed', [animate('.15s')]),
      transition('closed => open', [animate('.15s')]),
    ]),
    trigger('openDialog', [
      state(
        'open',
        style({
          opacity: 1,
          // display: 'fixed',
          transform: 'translateY(0px)',
          zIndex: 20,
        })
      ),
      state(
        'closed',
        style({
          opacity: 0,
          zIndex: -10,
          transform: 'translateY(35px)',
        })
      ),
      transition('open => closed', animate('.2s ease-out')),
      transition('closed => open', animate('.2s ease-in')),
    ]),
    trigger('openDropShadow', [
      state(
        'open',
        style({
          opacity: 1,
        })
      ),
      state(
        'closed',
        style({
          opacity: 0,
          zIndex: -10,
        })
      ),
      transition('open => closed', animate('.1s')),
      transition('closed => open', animate('1s')),
    ]),
  ],
})
export class TestComponentComponent {
  isOpen: boolean = false;
  isDialogOpen: boolean = false;
  isDropShadowOpen: boolean = false;
  toastMsg: string = '';
  inputText: string = '';

  toggle(message: string) {
    this.toastMsg = message;
    this.isOpen = !this.isOpen;
    setTimeout(() => {
      this.isOpen = false;
    }, 3000);
  }
  toggleDialog() {
    this.isDropShadowOpen = !this.isDropShadowOpen;
    this.isDialogOpen = !this.isDialogOpen;
  }
  handleCloseDialog() {
    this.isDropShadowOpen = false;
    this.isDialogOpen = false;
  }
  handleSave() {
    this.toastMsg = this.inputText;
    this.handleCloseDialog();
    this.inputText = '';
    setTimeout(() => {
      this.toggle(this.toastMsg);
    }, 500);
    setTimeout(() => {
      this.toastMsg = '';
    }, 3501);
  }
  handleInput(e: Event) {
    const inputElement = e.target as HTMLInputElement;
    this.inputText = inputElement.value;
  }
}
