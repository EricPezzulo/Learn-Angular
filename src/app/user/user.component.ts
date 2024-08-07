import { Component, Input } from '@angular/core';
import { UserData } from '../user-data';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './user.component.html',
  // styleUrl: './user.component.css'
})
export class UserComponent {
  userData: UserData = {
    firstName: 'Billy',
    lastName: 'Butcher',
    address: 'Unknown',
    phoneNumber: 'Unknown',
    photo:
      'https://staticg.sportskeeda.com/editor/2024/05/b4e89-17164144459909-1920.jpg?w=640',
    confirmedKills: 3,
    confirmedKillsErrorMsg: 'Cannot have less than 0 kills.',
    confirmedKillsError: false,

    active: true,
  };

  edit: boolean = false;

  updateName(e: any) {
    const splitString = e.target.value.split(' ');
    if (splitString.length > 1) {
      let firstName = splitString[0];
      let lastName = splitString[1];

      this.userData.firstName = firstName;
      this.userData.lastName = lastName;
    }
  }
  increment() {
    this.userData.confirmedKills++;
    this.userData.confirmedKillsError = false;
  }
  decrement() {
    if (this.userData.confirmedKills <= 0) {
      this.userData.confirmedKillsError = true;
    } else if (this.userData.confirmedKills >= 0) {
      this.userData.confirmedKills--;
      this.userData.confirmedKillsError = false;
    } else {
      this.userData.confirmedKills--;
    }
  }
  toggleEdit = () => {
    this.edit = !this.edit;
  };
}
