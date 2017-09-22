import { Component } from '@angular/core';
import {UserServiceService} from './service/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService: UserServiceService) {}
  getUser() {
    const user = this.userService.getUser();
  }

}
