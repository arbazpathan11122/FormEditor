import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user = {
    name: '',
    email: '',
    phone: '',
    otp: ''
  };
  sendOtpClick = false;
  otp: number;

  showPasswdTab = false;
  password = {
    paswd: '',
    confirmPaswd: ''
  };
  constructor() { }

  ngOnInit() {
  }
  generateOTP() {
    this.sendOtpClick = true;
    this.otp = Math.floor(1000 + Math.random() * 9000);
    alert('your OTP is  ' + this.otp);
  }

  submitSingUpForm() {
    this.showPasswdTab = true;
  }


  submitPassword() {

  }
}
