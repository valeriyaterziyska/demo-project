import { Component } from '@angular/core';

type User = {
  name: String,
  age: Number,
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users = [
    { name: 'Pesho', age: 18 },
    { name: 'Mitko', age: 24 },
    { name: 'Petya', age: 26 },
    { name: 'Yoanna', age: 35 },
    { name: 'Dimitar', age: 36 }
  ] as User[];
} 
