import { Injectable } from '@angular/core';
import { UserComponent } from './user/user.component';
import { UserData } from './user-data';
import userList from '../../db.json';
@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  protected profileList: UserData[] = userList.users;
  constructor() {}

  getAllUsers(): UserData[] {
    return this.profileList;
  }

  getUserById(id: Number): UserData | undefined {
    return this.profileList.find((x) => x.userId === id);
  }
}
