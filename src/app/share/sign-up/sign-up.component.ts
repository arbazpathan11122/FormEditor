import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

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
    otp: null
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
    swal('your OTP is  ' + this.otp);

  }

  submitSingUpForm() {
    swal({
      position: 'top-end',
      type: 'success',
      title: 'Sing Up Successfuly',
      showConfirmButton: false,
      timer: 1000
    });
    this.showPasswdTab = true;
  }


  submitPassword() {
    swal({
      position: 'top-end',
      type: 'success',
      title: 'Password Create  Successfuly',
      showConfirmButton: false,
      timer: 700
    });
  }
}
