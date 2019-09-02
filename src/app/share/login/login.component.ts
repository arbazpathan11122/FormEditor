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
  otp: number;
  emailTabActive = true;
  sendOtpClick = false;
  constructor() {

  }

  ngOnInit() {
  }
  changeTabe(val) {
    this.emailTabActive = val;
  }
  // login(user) {
  //   if (user.userName === 'Nyazkhan1996' && user.password === '12345678') {
  //     this.router.navigate(['/home']);
  //   }
  // }
  generateOTP() {
    this.sendOtpClick = true;
    this.otp = Math.floor(1000 + Math.random() * 9000);
    alert('your OTP is ' + this.otp);
  }
}

