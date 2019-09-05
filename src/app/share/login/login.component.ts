import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {
    userName: '',
    password: '',
  };
  userPhone = {
    phone: '',
    otp: null,

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
    swal('your OTP is  ' + this.otp);
  }


  login() {

    swal({
      position: 'top-end',
      type: 'success',
      title: 'Login Successfuly',
      showConfirmButton: false,
      timer: 300
    });
  }
}

