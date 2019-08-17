import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
declare const $: any;
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



  form: any;
  formCurrentPage: any;
  currentPageIndex = 0;
  formFields: any;
  showTable = false;
  DropDownSettings = {};
  constructor() {

    this.form = JSON.parse(localStorage.getItem('form'));
    this.formCurrentPage = this.form.attributes[this.currentPageIndex];
    this.formFields = JSON.parse(localStorage.getItem('formFields'));
    console.log(this.formCurrentPage);


  }
  ngOnInit() {
    this.DropDownSettings = {
      singleSelection: false,
      idField: 'label',
      textField: 'label',
      enableCheckAll: false,
      itemsShowLimit: 3,
      // limitSelection: 2,
      allowSearchFilter: true,
    };
  }


  goToPage(index) {
    this.currentPageIndex = index;
    this.formCurrentPage = this.form.attributes[this.currentPageIndex];
  }



  mailExtention(val, index) {
    val.mailType = val.emailList[index];


  }


  numberInputValidation(item) {

    if (item.value > item.validOption.max) {
      item.value = item.validOption.max;
    } else if (item.value < item.validOption.min) {
      item.value = item.validOption.min;
    }
    console.log(item.value);
    console.log(item);


  }



  navigateToPage(val) {
    this.currentPageIndex = this.currentPageIndex + val;
    this.formCurrentPage = this.form.attributes[this.currentPageIndex];

  }


  submitResult(val, bc) {

    console.log(this.form);


    if (bc) {

      swal('Error', ' Please Fill The Mandatory Fields (*)', 'error');
      return;
    }

    this.showTable = true;

  }



}
