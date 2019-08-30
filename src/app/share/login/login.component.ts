import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {
    userName: '',
    password: ''
  };
  constructor() {

  }

  ngOnInit() {
  }

  // login(user) {
  //   if (user.userName === 'Nyazkhan1996' && user.password === '12345678') {
  //     this.router.navigate(['/home']);
  //   }
  // }
}
