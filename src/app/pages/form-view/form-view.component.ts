import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.scss']
})
export class FormViewComponent implements OnInit {
  // item = { fileType: 'header' };
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

  submitResult(val, bc) {

    console.log(bc);

    if (bc) {

      swal('Error', ' Please Fill The Mandatory Fields (*)', 'error');
      return;
    }

    this.showTable = true;

  }
}
