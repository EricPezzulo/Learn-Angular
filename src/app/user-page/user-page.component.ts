import { Component, Input, OnInit } from '@angular/core';
import userList from '../../../db.json';
import { ActivatedRoute } from '@angular/router';
import { UserData } from '../user-data';
@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [],
  templateUrl: './user-page.component.html',
})
export class UserPageComponent implements OnInit {
  userId!: string | number | null;

  user!: UserData;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('');
    console.log(this.userId);
  }
}
