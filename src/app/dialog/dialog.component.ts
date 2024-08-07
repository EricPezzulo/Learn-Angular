import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

// import { UserComponent } from '../user/user.component';
@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './dialog.component.html',
  // styleUrl: './dialog.component.css'
})
export class DialogComponent {
  @Input() dialogOpen: boolean = false;
  @Output() dialogClosed: EventEmitter<void> = new EventEmitter<void>();
  closeDialog() {
    this.dialogOpen = false;
    this.dialogClosed.emit();
  }
}
