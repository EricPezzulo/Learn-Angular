import { Component, inject } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { CommonModule } from '@angular/common';
import { DialogComponent } from '../dialog/dialog.component';
import { UserData } from '../user-data';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProfileService } from '../profile.service';
import { AddUserComponent } from '../add-user/add-user.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    UserComponent,
    CommonModule,
    DialogComponent,
    RouterLink,
    RouterOutlet,
    AddUserComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  users: UserData[] = [];
  profileService: ProfileService = inject(ProfileService);

  constructor() {
    this.users = this.profileService.getAllUsers();
  }
}
