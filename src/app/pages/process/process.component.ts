import { Component, OnInit, Inject, } from '@angular/core';
import { Router } from '@angular/router';
declare const $: any;
@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})

export class ProcessComponent implements OnInit {

  constructor(@Inject(Router) private router: Router) { }

  ngOnInit() {
  }
  goToFoermEditor() {

    $('#ProcessDetailsModel').modal('hide');
    this.router.navigate(['/home']);
  }
}
