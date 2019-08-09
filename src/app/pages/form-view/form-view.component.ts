import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.scss']
})
export class FormViewComponent implements OnInit {
  // item = { fileType: 'header' };

  // validation variables
  mailTypeSelected = '';

  // this.dropdownList = [
  //   {
  //     id: 1,
  //     label: '@Gmail.com',

  //   },
  //   {
  //     id: 2,
  //     label: '@Outlook.com',

  //   },
  //   {
  //     id: 3,
  //     label: '@Yahoo.com',

  //   },
  //   {
  //     id: 4,
  //     label: '@Zoho.com',

  //   },
  //   {
  //     id: 5,
  //     label: '@Mail.com',

  //   },
  //   {
  //     id: 6,
  //     label: '@ProtonMail.com',

  //   },
  //   {
  //     id: 7,
  //     label: '@GMX.com',

  //   },
  // ];



  formName: any;
  formFields: any;
  showTable = false;
  constructor() {

    this.formName = JSON.parse(localStorage.getItem('formName'));

    this.formFields = JSON.parse(localStorage.getItem('formFields'));

    console.log(this.formFields);

  }
  ngOnInit() {
  }






  mailExtention(val, index) {
    val.mailType = val.emailList[index];


  }






  submitResult(val, bc) {

    console.log(bc);

    if (bc) {

      swal('Error', ' Please Fill The Mandatory Fields (*)', 'error');
      return;
    }

    this.showTable = true;

  }
}
