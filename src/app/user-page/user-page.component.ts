import { Component, inject, input, Input, OnInit } from '@angular/core';

import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserData } from '../user-data';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../profile.service';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { DialogComponent } from '../dialog/dialog.component';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    RouterLink,
    DialogComponent,
  ],
  templateUrl: './user-page.component.html',
})
export class UserPageComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  dialogOpen: boolean = false;
  profileService = inject(ProfileService);
  changeDetector = inject(ChangeDetectorRef);
  fullName!: string;
  @Input() user!: UserData;

  updatedValues!: UpdatedValues;

  openDialog() {
    this.dialogOpen = true;
    this.changeDetector.detectChanges();
  }
  handleDialogClosed() {
    this.dialogOpen = false;
  }
  userId: string | number | null = 0;

  edit: boolean = false;
  handleToggleEdit() {
    this.edit = !this.edit;
    console.log(this.user);
  }
  // updateData() {
  //   this.user.firstName = this.updatedValues.firstName;
  //   this.user.lastName = this.updatedValues.lastName;
  //   this.user.phoneNumber = this.updatedValues.phoneNumber;
  //   this.user.age = this.updatedValues.age;
  //   this.edit = false;
  // }
  // updateName(e: Event) {
  //   const inputElement = e.target as HTMLInputElement;
  //   console.log(inputElement.value);
  //   const splitString = inputElement.value.split(' ');
  //   if (splitString.length > 1) {
  //     let firstName = splitString[0];
  //     let lastName = splitString[1];

  //     this.user.firstName = firstName;
  //     this.user.lastName = lastName;
  //   }
  // }

  updateFirstName(e: Event) {
    const inputElement = e.target as HTMLInputElement;
    this.user.firstName = inputElement.value;
  }
  updateLastName(e: Event) {
    const inputElement = e.target as HTMLInputElement;
    this.user.lastName = inputElement.value;
  }
  updatePhoneNumnber(e: Event) {
    const inputElement = e.target as HTMLInputElement;
    this.user.phoneNumber = inputElement.value;
  }

  updateAddress(e: Event) {
    const inputElement = e.target as HTMLInputElement;
    // this.updatedValues.address = inputElement.value;
    this.user.address = inputElement.value;
  }

  updateAge(e: Event) {
    const inputElement = e.target as HTMLInputElement;
    this.user.age = inputElement.value;
    // this.updatedValues.age = Number(inputElement.value);
  }

  constructor() {}
  ngOnInit() {
    const userId = Number(this.route.snapshot.params['id']);
    const user = this.profileService.getUserById(userId);
    if (user) {
      this.user = user;
    }

    if (this.user.firstName && this.user.lastName) {
      this.fullName = `${this.user.firstName} ${this.user.lastName}`;
    } else if (this.user.firstName && !this.user.lastName) {
      this.fullName = this.user.firstName;
    } else if (!this.user.firstName && this.user.lastName) {
      this.fullName = this.user.lastName; // Corrected this line to use lastName instead of firstName
    } else {
      this.fullName = ''; // Default value when both are empty or null
    }
  }
}
export interface UpdatedValues {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  age: number;
}
