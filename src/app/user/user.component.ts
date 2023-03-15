import {Component} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent {
  users = ['Leonardo', 'Paola', 'Manuel']
  userName = ``;
  visible = false;

  constructor() {
    setTimeout(() => {
      this.visible = true;
    }, 3000)
  }

  onAddUser() {
    this.users.push(this.userName);
  }
}
