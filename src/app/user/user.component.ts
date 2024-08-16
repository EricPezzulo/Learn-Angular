import { Component, Input } from '@angular/core';
import { UserData } from '../user-data';
import { MatIconModule } from '@angular/material/icon';
import { DialogComponent } from '../dialog/dialog.component';
import { HomeComponent } from '../home/home.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MatIconModule,
    DialogComponent,
    HomeComponent,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  dialogOpen: boolean = false;
  edit: boolean = false;
  fullName!: string;
  @Input() user!: UserData;

  ngOnInit(): void {
    this.fullName = `${this.user.firstName} ${this.user.lastName}`;
  }
  openDialog() {
    this.dialogOpen = true;
  }

  handleDialogClosed() {
    this.dialogOpen = false;
  }
  updateName(e: Event) {
    const inputElement = e.target as HTMLInputElement;
    const splitString = inputElement.value.split(' ');
    if (splitString.length > 1) {
      let firstName = splitString[0];
      let lastName = splitString[1];

      this.user.firstName = firstName;
      this.user.lastName = lastName;
    }
  }
  updatePhoneNumnber(e: Event) {
    const inputElement = e.target as HTMLInputElement;
    this.user.phoneNumber = inputElement.value;
  }

  updateAddress(e: Event) {
    const inputElement = e.target as HTMLInputElement;
    this.user.address = inputElement.value;
  }

  updateAge(e: Event) {
    const inputElement = e.target as HTMLInputElement;
    this.user.age = inputElement.value;
  }

  toggleEdit = () => {
    this.edit = !this.edit;
  };
}
