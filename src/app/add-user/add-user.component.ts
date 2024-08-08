import {
  ChangeDetectorRef,
  Component,
  inject,
  input,
  Input,
} from '@angular/core';
import { UserData } from '../user-data';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './add-user.component.html',
})
export class AddUserComponent {
  @Input() users!: UserData[];
  private cd: ChangeDetectorRef = inject(ChangeDetectorRef);
  firstName!: string;
  lastName!: string;
  address!: string;
  phoneNumber!: string;

  addUser() {
    function getRandomInt(min: number, max: number) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const randInt = getRandomInt(10, 100000);

    const newUser: NewUser = {
      firstName: this.firstName,
      lastName: this.lastName,
      address: this.address,
      phoneNumber: this.phoneNumber,
      userId: randInt,
    };
    this.users.push(newUser);
    console.log(this.users);
    this.cd.detectChanges();
  }
  updateFirstName(e: Event) {
    const inputElement = e.target as HTMLInputElement;
    this.firstName = inputElement.value;
  }
  updateLastName(e: Event) {
    const inputElement = e.target as HTMLInputElement;
    this.lastName = inputElement.value;
  }
  updateAddress(e: Event) {
    const inputElement = e.target as HTMLInputElement;
    this.address = inputElement.value;
  }
  updatePhoneNumber(e: Event) {
    const inputElement = e.target as HTMLInputElement;
    this.phoneNumber = inputElement.value;
  }
}

export interface NewUser {
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  userId: number;
}
