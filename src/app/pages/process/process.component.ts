import { Component, OnInit, Inject, } from '@angular/core';
import { Router } from '@angular/router';
import { field } from 'src/app/class/global.model';
declare const $: any;
@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})

export class ProcessComponent implements OnInit {
  FormDetails = {
    formName: '',
    category: '',
    desc: '',
  };

  modelFields: Array<field> = [];
  model: any = {
    name: '',
    description: '',
    category: '',
    folder: {
      FolderName: '',
      FileName: '',
      pages: []
    },
    theme: {
      fontFamily: '',
      qestColor: '',
      ansColor: '',
      bgColor: 'f0f0f0',
      textColor: '555555',
      bannerImage: ''
    },

    attributes: [
      {
        name: 'Page 1',
        field: this.modelFields
      }]
  };
  formStorge = [];
  constructor(@Inject(Router) private router: Router) { }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('formList'))) {

      this.formStorge = JSON.parse(localStorage.getItem('formList'));
    }


  }
  goToFoermEditor() {
    this.formStorge.push(this.model);
    localStorage.setItem('formList', JSON.stringify(this.formStorge));

    $('#ProcessDetailsModel').modal('hide');
    this.router.navigate(['/home'], { queryParams: { formId: this.formStorge.length - 1 } });

  }

  editProcess(i) {
    // this.router.navigate(['/home'], { queryParams: { formId: i } });

  }
}
