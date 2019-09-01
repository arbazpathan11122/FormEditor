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
  url: any;
  numberError = false;

  form: any;
  formCurrentPage: any;
  currentPageIndex = 0;
  formFields: any;
  showTable = false;
  DropDownSettings = {};
  constructor() {
    $("#datepicker").datepicker();

    // $("#form_datepicker_enddate").datetimepicker();
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

    this.form.attributes.forEach(element => {
      console.log('its call 1');

      element.field.forEach(el => {
        console.log('its call2');
        const id = '#' + el.name;
        console.log(id);


        // $(id).datepicker.minDate('10/03/2017');


        if (el.fileType == 'date' && this.isValidObject(el.validOption)) {
          console.log('its call3');

          const min = ((el.validOption.max) ? el.validOption.max : '');
          const max = ((el.validOption.max) ? el.validOption.max : '');
          console.log('its call');

          $('.date').datepicker({
            format: 'dd / mm / yyyy ',
            startDate: new Date(min),
            endDate: new Date(max)
          });
        }
      });
    });
  }
  // check object is not null or valid

  isValidObject(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {

        return true;
      }
    }
    return false;
  }
  setDateValidation(val) {
    // setTimeout(() => {
    //   const min = ((val.validOption.max) ? val.validOption.max : '');
    //   const max = ((val.validOption.max) ? val.validOption.max : '');
    //   const id = '#' + val.name;
    //   $(id).datepicker({
    //     'format': 'dd / mm / yyyy ',
    //     'startDate': new Date(min),
    //     'endDate': new Date(max)
    //   });
    // }, 0);
  }
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      // tslint:disable-next-line: no-shadowed-variable
      reader.onload = (event) => { // called once readAsDataURL is completed
        console.log(event);

        this.url = (event.target as FileReader).result;
      };
    }
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
      // item.value = item.validOption.max;
      this.numberError = true;

    } else if (item.value < item.validOption.min) {
      // item.value = item.validOption.min;
      this.numberError = true;

    } else {
      this.numberError = false;

    }
    console.log(this.numberError);

    console.log(item.value);
    console.log(item);


  }



  navigateToPage(val) {
    this.currentPageIndex = this.currentPageIndex + val;
    this.formCurrentPage = this.form.attributes[this.currentPageIndex];

  }


  submitResult(val, bc) {

    console.log(this.form);

    if (this.numberError) {
      swal('Error', ' Please fill valid details', 'error');
      return;
    }
    if (bc) {

      swal('Error', ' Please Fill The Mandatory Fields (*)', 'error');
      return;
    }

    this.showTable = true;

  }



}
