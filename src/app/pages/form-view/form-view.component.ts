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

  }
  onSelectFile(event, val) {
    console.log(event.target.files[0]);
    console.log(val.validOption);
    let uploadFileSize = event.target.files[0].size / 1024;
    if (this.isValidObject(val.validOption)) {
      if (val.validOption.value === 'Mb') {
        uploadFileSize /= 1024;
      }
      if (val.validOption.value === 'Gb') {
        uploadFileSize = uploadFileSize / 1024 / 1024;
      }
      if (uploadFileSize < val.validOption.size) {
        if (event.target.files && event.target.files[0]) {
          val.uploadedFileByUser.name = event.target.files[0].name;
          const reader = new FileReader();

          reader.readAsDataURL(event.target.files[0]); // read file as data url

          // tslint:disable-next-line: no-shadowed-variable
          reader.onload = (event) => { // called once readAsDataURL is completed
            console.log(val);

            this.url = (event.target as FileReader).result;
            val.uploadedFileByUser.url = this.url;
          };
        }
      } else {
        swal('Error', 'File Size Exceed Limit of ' + val.validOption.size + val.validOption.value, 'error');

      }
    } else {
      if (event.target.files && event.target.files[0]) {
        val.uploadedFileByUser.name = event.target.files[0].name;

        const reader = new FileReader();

        reader.readAsDataURL(event.target.files[0]); // read file as data url

        // tslint:disable-next-line: no-shadowed-variable
        reader.onload = (event) => { // called once readAsDataURL is completed
          console.log(event);

          this.url = (event.target as FileReader).result;
          val.uploadedFileByUser.url = this.url;
        };
      }


    }


  }
  uploadFileClick(id) {
    document.getElementById(id).click();
  }


  ratingColor(item, i) {
    item.RatingByUser = i;
    for (let j = 0; j < item.ratingArray.length; j++) {
      // document.getElementsByClassName(item + j);;
      if (i >= j) {
        if (item.selestedValidation == 'btn btn-light') {
          document.getElementById(item.name + j).style.backgroundColor = '#fcf403';

        } else {

          document.getElementById(item.name + j).style.color = '#fcf403';
        }
      } else {
        document.getElementById(item.name + j).style.color = 'black';

      }
      // console.log(nodes);
      // nodes[j].style.color = 'yellow';
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
    let errorCount = 0;
    if (this.numberError) {
      swal('Error', ' Please fill valid details', 'error');
      return;
    }
    if (bc) {

      swal('Error', ' Please Fill The Mandatory Fields (*)', 'error');
      return;
    }
    this.form.attributes.forEach(element => {
      element.field.forEach(el => {

        // tslint:disable-next-line: no-debugger
        if (el.required) {
          if ((el.fielType === 'rating') && (el.RatingByUser == '')) {
            swal('Error', ' Please fill Rating', 'error');
            errorCount++
            return;

          }

          if ((el.fielType === 'file') && (el.uploadedFileByUser.url == '')) {
            swal('Error', ' Please Upload File', 'error');
            errorCount++

            return;

          }
        }
      });
    });
    if (errorCount == 0) {
      this.showTable = true;

    }


  }



}
