import { Component, OnInit, Inject, } from '@angular/core';
import { Router } from '@angular/router';
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
  formStorge = [];
  constructor(@Inject(Router) private router: Router) { }

  ngOnInit() {
    this.formStorge = JSON.parse(localStorage.getItem('formList'));
  }
  goToFoermEditor() {
    localStorage.setItem('FormDetails', JSON.stringify(this.FormDetails));

    $('#ProcessDetailsModel').modal('hide');
    // this.router.navigate(['/home'], { queryParams: { NewProcess: this.FormDetails.formName } });
    this.router.navigate(['/home']);
  }
}
