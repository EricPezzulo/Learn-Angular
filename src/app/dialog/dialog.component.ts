import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { UserData } from '../user-data';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './dialog.component.html',
})
export class DialogComponent {
  @Input() dialogOpen: boolean = false;
  @Input() user!: UserData;
  @Output() dialogClosed: EventEmitter<void> = new EventEmitter<void>();

  newPhotoUrl!: string;

  handleChangePictureUrl(e: Event) {
    let inputElement = e.target as HTMLInputElement;
    this.newPhotoUrl = inputElement.value;
  }

  uploadPicture() {
    this.user.photoUrl = this.newPhotoUrl;
    this.dialogClosed.emit();
  }

  closeDialog() {
    this.dialogOpen = false;
    this.dialogClosed.emit();
  }
}
