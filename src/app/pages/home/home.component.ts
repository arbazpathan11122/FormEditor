import { Component, OnInit } from '@angular/core';
import { icons_and_fields } from '../../class/data';
import swal from 'sweetalert2';
import { DndDropEvent, DropEffect } from 'ngx-drag-drop';
import { field, value } from 'src/app/class/global.model';
import { FormService } from 'src/app/service/form.service';
declare const $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  iconField: any = icons_and_fields;
  value: value = {
    label: '',
    value: ''
  };
  formDataForView: any;
  showBtn = true;
  hideClass = 'mainshow';
  showNav = true;
  numberArray = [1, 2, 3, 4, 5];
  success = false;
  showProperties = false;
  selectedItem: any = {};
  modelFields: Array<field> = [];
  model: any = {
    name: 'App name...',
    description: 'App Description...',
    folder: {
      FolderName: '',
      FileName: '',
      pages: []
    },
    theme: {
      bgColor: 'f0f0f0',
      textColor: '555555',
      bannerImage: ''
    },
    attributes: this.modelFields
  };

  report = false;
  reports: any = [];

  // dropdown for show email and phone list for validation

  emailDropdownList = [];
  emailSettings = {};
  phoneSettings = {};
  phoneDropdownList = [];
  httpSettings = {};
  httpDropdownList = [];
  comSettings = {};
  comDropdownList = [];

  checkingExistingForm: any;
  constructor() {
    setTimeout(() => {
      $('[data-toggle="tooltip"]').tooltip();

    }, 0);

  }

  ngOnInit() {
    this.showNavbar();
    this.checkingExistingForm = JSON.parse(localStorage.getItem('formName'));

    this.emailDropdownList = [
      {
        id: 1,
        label: 'Gmail',
        pattern: '@Gmail.com',

      },
      {
        id: 2,
        label: 'Outlook',
        pattern: '@Outlook.com',

      },
      {
        id: 3,
        label: 'Yahoo',
        pattern: '@Yahoo.com',

      },
      {
        id: 4,
        label: 'Zoho',
        pattern: '@Zoho.com',

      },
      {
        id: 5,
        label: 'Mail',
        pattern: '@Mail.com',

      },
      {
        id: 6,
        label: 'ProtonMail',
        pattern: '@ProtonMail.com',

      },
      {
        id: 7,
        label: 'GMX',
        pattern: '@GMX.com',

      },
    ];


    this.emailSettings = {
      singleSelection: false,
      idField: 'pattern',
      textField: 'label',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.phoneSettings = {
      singleSelection: false,
      idField: 'pattern',
      textField: 'label',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.phoneDropdownList = [
      {
        id: 1,
        label: 'India',
        pattern: 'india',

      },
      {
        id: 2,
        label: 'pakistan',
        pattern: 'pakian',

      },
      {
        id: 3,
        label: 'BanglaDesh',
        pattern: 'Banglesh',

      },
      {
        id: 4,
        label: 'china',
        pattern: 'chia',

      },
      {
        id: 5,
        label: 'japan',
        pattern: 'jaan',

      },
      {
        id: 6,
        label: 'U S A',
        pattern: 'usa',

      },
      {
        id: 7,
        label: 'Brazil',
        pattern: '@Gmail.com',

      },
    ];

    this.httpSettings = {
      singleSelection: false,
      idField: 'pattern',
      textField: 'label',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.httpDropdownList = [
      {
        id: 1,
        label: 'HTTP://',
        pattern: 'http://',

      },
      {
        id: 2,
        label: 'HTTPS://',
        pattern: 'https://',

      },
    ];

    this.comSettings = {
      singleSelection: false,
      idField: 'pattern',
      textField: 'label',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };


    this.comDropdownList = [
      {
        id: 1,
        label: '.Com',
        pattern: '.com',

      },
      {
        id: 2,
        label: '.IN',
        pattern: '.in',

      },
      {
        id: 3,
        label: '.CO',
        pattern: '.co',

      },
      {
        id: 4,
        label: '.NET',
        pattern: '.net',

      },
      {
        id: 5,
        label: '.CO.IN',
        pattern: '.co.in',

      },
      {
        id: 6,
        label: '.NET.IN',
        pattern: '.net.in',

      },
      {
        id: 7,
        label: '.EDU',
        pattern: '.edu',

      },
    ];




  }








  allowDrop(event) {

  }

  drop(event) {

  }

  onDragStart(event: DragEvent) {
    console.log('drag started', JSON.stringify(event, null, 2));
  }

  onDragEnd(event: DragEvent) {
    console.log('drag ended', JSON.stringify(event, null, 2));
  }

  onDraggableCopied(event: DragEvent) {
    console.log('draggable copied', JSON.stringify(event, null, 2));
  }

  onDraggableLinked(event: DragEvent) {
    console.log('draggable linked', JSON.stringify(event, null, 2));
  }

  onDragged(item: any, list: any[], effect: DropEffect) {
    if (effect === 'move') {
      const index = list.indexOf(item);
      list.splice(index, 1);
    }
  }

  onDragCanceled(event: DragEvent) {
    console.log('drag cancelled', JSON.stringify(event, null, 2));
  }

  onDragover(event: DragEvent) {
    console.log('dragover', JSON.stringify(event, null, 2));
  }

  onDrop(event: DndDropEvent, list?: any[]) {
    console.log(event);
    console.log(list);


    if (list && (event.dropEffect === 'copy' || event.dropEffect === 'move')) {

      if (event.dropEffect === 'copy') {
        event.data.name = event.data.type + '-' + new Date().getTime();
      }
      let index = event.index;
      if (typeof index === 'undefined') {
        index = list.length;
      }
      list.splice(index, 0, event.data);
    }
    this.currentValidation(event.data);
  }
  dblclickMove(event: DndDropEvent, list: any, item: any) {
    console.log(event);
    // item.name = item.type + '-' + new Date().getTime();
    console.log(item);

    list.splice(list.length, 0, JSON.parse(JSON.stringify(item)));
    this.currentValidation(item);


  }
  currentValidation(item) {
    delete this.selectedItem;
    console.log(item);

    // item.name = item.type + '-' + new Date().getTime();
    console.log(item);

    this.showProperties = true;
    this.selectedItem = item;
    // console.log(this.formValidations[this.selectedItem.fielType]);

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

  addValue(values) {
    values.push(this.value);
    this.value = { label: '', value: '' };
  }




  generateDynamicArray(no) {
    console.log(no);

    this.numberArray.splice(0, this.numberArray.length);
    for (let i = 0; i < no; i++) {
      this.numberArray.push(i);
      console.log(i, no);

    }
    console.log(this.numberArray);

  }

  removeField(i) {
    swal({
      title: 'Are you sure?',
      text: 'Do you want to remove this field?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00B96F',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove!'
    }).then((result) => {
      if (result.value) {
        this.model.attributes.splice(i, 1);
        delete this.selectedItem;
        this.selectedItem = this.model.attributes[i - 1];

      }
    });

  }

  showNavbar() {


    if (this.showBtn) {
      this.showNav = false;
      this.hideClass = 'mainhide';

    } else {
      this.showNav = true;
      this.hideClass = 'mainshow';

    }
    this.showBtn = !this.showBtn;
  }

  submitbtn() {
    // this.formDataForView = JSON.parse(JSON.stringify(this.model));
    // console.log(this.formDataForView);

    localStorage.setItem('formName', JSON.stringify(this.model));
    localStorage.setItem('formFields', JSON.stringify(this.model.attributes));
    this.checkingExistingForm = JSON.parse(localStorage.getItem('formName'));

  }
  updateForm() {
    let input = new FormData;
    input.append('id', this.model._id);
    input.append('name', this.model.name);
    input.append('description', this.model.description);
    input.append('bannerImage', this.model.theme.bannerImage);
    input.append('bgColor', this.model.theme.bgColor);
    input.append('textColor', this.model.theme.textColor);
    input.append('attributes', JSON.stringify(this.model.attributes));

    // this.us.putDataApi('/admin/updateForm',input).subscribe(r=>{
    //   console.log(r);
    //   swal('Success','App updated successfully','success');
    // });
  }


  initReport() {
    this.report = true;
    let input = {
      id: this.model._id
    }
    // this.us.getDataApi('/admin/allFilledForms',input).subscribe(r=>{
    //   this.reports = r.data;
    //   console.log('reports',this.reports);
    //   this.reports.map(records=>{
    //     return records.attributes.map(record=>{
    //       if(record.type=='checkbox'){
    //         record.value = record.values.filter(r=>r.selected).map(i=>i.value).join(',');
    //       }
    //     })
    //   });
    // });
  }



  toggleValue(item) {
    item.selected = !item.selected;
  }

  submit() {
    let valid = true;
    let validationArray = JSON.parse(JSON.stringify(this.model.attributes));
    validationArray.reverse().forEach(field => {
      console.log(field.label + '=>' + field.required + '=>' + field.value);
      if (field.required && !field.value && field.type != 'checkbox') {
        swal('Error', 'Please enter ' + field.label, 'error');
        valid = false;
        return false;
      }
      if (field.required && field.regex) {
        let regex = new RegExp(field.regex);
        if (regex.test(field.value) == false) {
          swal('Error', field.errorText, 'error');
          valid = false;
          return false;
        }
      }
      if (field.required && field.type == 'checkbox') {
        if (field.values.filter(r => r.selected).length == 0) {
          swal('Error', 'Please enterrr ' + field.label, 'error');
          valid = false;
          return false;
        }

      }
    });
    if (!valid) {
      return false;
    }
    console.log('Save', this.model);
    let input = new FormData;
    input.append('formId', this.model._id);
    input.append('attributes', JSON.stringify(this.model.attributes))
    // this.us.postDataApi('/user/formFill',input).subscribe(r=>{
    //   console.log(r);
    //   swal('Success','You have contact sucessfully','success');
    //   this.success = true;
    // },error=>{
    //   swal('Error',error.message,'error');
    // });
  }


}
