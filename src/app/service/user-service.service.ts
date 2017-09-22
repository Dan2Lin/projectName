import { Injectable } from '@angular/core';

@Injectable()
export class UserServiceService {

  constructor() { }

  getUser() {
    return {username : '张三', age : 23, tel : 13244566566};
  }

  Log(msg) {
    console.log(msg);
    console.error(msg);
  }
}
