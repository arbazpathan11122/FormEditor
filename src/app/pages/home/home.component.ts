import { Component, OnInit, Inject } from '@angular/core';
import { icons_and_fields } from '../../class/data';
import swal from 'sweetalert2';
import { DndDropEvent, DropEffect } from 'ngx-drag-drop';
import { field, value } from 'src/app/class/global.model';
import { FormService } from 'src/app/service/form.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
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
    value: false
  };
  pictureChoiceValue = {
    label: '',
    value: false,
    img: '',
    name: '',
  };
  formDataForView: any;
  showBtn = false;
  hideClass = 'mainshow';
  showNav = true;
  numberArray = [1, 2, 3, 4, 5];
  success = false;
  showProperties = false;
  selectedItem: any = {};
  // modelFields: Array<field> = [];
  // model: any = {
  //   name: 'App name...',
  //   description: 'App Description...',
  //   folder: {
  //     FolderName: '',
  //     FileName: '',
  //     pages: []
  //   },
  //   theme: {
  //     fontFamily: '',
  //     qestColor: '',
  //     ansColor: '',
  //     bgColor: 'f0f0f0',
  //     textColor: '555555',
  //     bannerImage: ''
  //   },

  //   attributes: [
  //     {
  //       name: 'Page 1',
  //       field: this.modelFields
  //     }]
  // };
  formCurrentPage: any;
  currentPageIndex = 0;
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
  fontSettings = {};
  FontDropdownList = [];
  checkingExistingForm: any;

  assingToUser = {
    email: '',
    phone: ''
  };

  conditionRequired = false;
  showConditionalQues: false;
  conditionalQuesList = [];
  conditionalAnsList = [];
  currentFieldIndex: number;

  showGenSetting = true;
  // for assign model
  selfAssing = true;
  FontStyleArray = [
    {
      name: 'Arial'
      ,
      fontStyle: { fontFamily: 'Arial' }
    },
    {
      name: 'Helvetica'
      ,
      fontStyle: { fontFamily: 'Helvetica' }
    },
    {
      name: 'Times New Roman'
      ,
      fontStyle: { fontFamily: 'Times New Roman' }
    },

    {
      name: 'Poppins'
      ,
      fontStyle: { fontFamily: 'Poppins' }
    },
    {
      name: 'Courier New'
      ,
      fontStyle: { fontFamily: 'Courier New' }
    },
    {
      name: 'Courier'
      ,
      fontStyle: { fontFamily: 'Courier' }
    },
    {
      name: 'Verdana'
      ,
      fontStyle: { fontFamily: 'Verdana' }
    },
    {
      name: 'Georgia'
      ,
      fontStyle: { fontFamily: 'Georgia' }
    },
    {
      name: 'Palatino'
      ,
      fontStyle: { fontFamily: 'Palatino' }
    },
    {
      name: 'Garamond'
      ,
      fontStyle: { fontFamily: 'Garamond' }
    },
    {
      name: 'Bookman'
      ,
      fontStyle: { fontFamily: 'Bookman' }
    },
    {
      name: 'Comic Sans MS'
      ,
      fontStyle: { fontFamily: 'Comic Sans MS' }
    },
    {
      name: 'Trebuchet MS'
      ,
      fontStyle: { fontFamily: 'Trebuchet MS' }
    },
  ];

  formStorge = [];
  model: any;
  formListNo: number;
  constructor(@Inject(Router) private router: Router, @Inject(ActivatedRoute) private activatedRoute: ActivatedRoute,
  ) {
    setTimeout(() => {
      $('[data-toggle="tooltip"]').tooltip();

    }, 0);
    this.formStorge = JSON.parse(localStorage.getItem('formList'));

    this.subscribeRouteChanges();



  }



  ngOnInit() {

    this.showNavbar();
    // this.checkingExistingForm = JSON.parse(localStorage.getItem('formName'));

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
      itemsShowLimit: 2,
      allowSearchFilter: true
    };

    this.phoneSettings = {
      singleSelection: false,
      idField: 'pattern',
      textField: 'label',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true
    };

    this.phoneDropdownList = [
      {
        id: 1,
        label: 'India',
        pattern: '+91',

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
      itemsShowLimit: 2,
      allowSearchFilter: false,
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
      itemsShowLimit: 2,
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
    this.fontSettings = {
      singleSelection: true,
      idField: 'fontStyle',
      textField: 'name',
      allowSearchFilter: true
    };
    this.FontDropdownList = [
      {
        name: 'Arial'
        ,
        fontStyle: { fontFamily: 'Arial' }
      },
      {
        name: 'Helvetica'
        ,
        fontStyle: { fontFamily: 'Helvetica' }
      },
      {
        name: 'Times New Roman'
        ,
        fontStyle: { fontFamily: 'Times New Roman' }
      },
      {
        name: 'Courier New'
        ,
        fontStyle: { fontFamily: 'Courier New' }
      },
      {
        name: 'Courier'
        ,
        fontStyle: { fontFamily: 'Courier' }
      },
      {
        name: 'Verdana'
        ,
        fontStyle: { fontFamily: 'Verdana' }
      },
      {
        name: 'Georgia'
        ,
        fontStyle: { fontFamily: 'Georgia' }
      },
      {
        name: 'Palatino'
        ,
        fontStyle: { fontFamily: 'Palatino' }
      },
      {
        name: 'Garamond'
        ,
        fontStyle: { fontFamily: 'Garamond' }
      },
      {
        name: 'Bookman'
        ,
        fontStyle: { fontFamily: 'Bookman' }
      },
      {
        name: 'Comic Sans MS'
        ,
        fontStyle: { fontFamily: 'Comic Sans MS' }
      },
      {
        name: 'Trebuchet MS'
        ,
        fontStyle: { fontFamily: 'Trebuchet MS' }
      },
    ];


  }



  subscribeRouteChanges() {

    this.activatedRoute.queryParams
      .subscribe((e: Params) => {
        // tslint:disable-next-line: radix
        this.formListNo = parseInt(e.formId);
        this.model = this.formStorge[this.formListNo];
        this.changeFontStyle(this.model.theme.fontFamily);
        this.changeQuestColor();
        this.changeAnsColor();

        this.formCurrentPage = this.model.attributes[this.currentPageIndex];
        console.log(this.model);

      }, (err: any) => {
        this.router.navigate(['/process']);
      });

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


    let index = event.index;
    if (list && (event.dropEffect === 'copy' || event.dropEffect === 'move')) {

      if (event.dropEffect === 'copy') {
        event.data.name = event.data.type + '-' + new Date().getTime();
      }
      if (typeof index === 'undefined') {
        index = list.length;
      }
      list.splice(index, 0, event.data);
    }
    this.currentValidation(event.data, index);
  }
  dblclickMove(event: DndDropEvent, list: any, item: any) {
    console.log(event);
    item.name = item.type + '-' + new Date().getTime();
    console.log(item);

    list.splice(list.length, 0, JSON.parse(JSON.stringify(item)));
    console.log(list);

    this.currentValidation(item, list.length - 1);


  }
  currentValidation(item, i) {
    delete this.selectedItem;
    console.log(i);

    this.showProperties = true;
    this.selectedItem = JSON.parse(JSON.stringify(item));

    setTimeout(() => {

      // if (!this.isValidObject(this.selectedItem.validOption)) {
      //   this.selectedItem.validOption = {};
      // } else {
      //   this.selectedItem.validOption = item.validOption;

      // }
      console.log(this.selectedItem.validOption);

    }, 1000);
    console.log(JSON.parse(JSON.stringify(item)));

    this.checkConditionalQuest();
    this.currentFieldIndex = i;
    this.showGenSetting = false;
  }
  changeSelectValidation(event) {
    console.log(event);

    console.log('its working bro');

  }


  checkConditionalQuest() {
    this.conditionalQuesList = [];
    this.formCurrentPage.field.forEach(element => {
      // tslint:disable-next-line: max-line-length
      if ((element.fielType === 'yesNo') || (element.fielType === 'trueFalse') || (element.fielType === 'picture') || (element.fielType === 'multiple') || (element.fielType === 'dropdown')) {
        this.conditionalQuesList.push(element);
      }
      console.log(this.conditionalQuesList);


    });
  }
  onChange(val) {
    console.log(val);
    console.log('its clcik');

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
    this.value = { label: '', value: false };
  }
  addPicture(values) {
    values.push(this.pictureChoiceValue);
    this.pictureChoiceValue = {
      label: '',
      value: false,
      img: '',
      name: '',
    };
  }

  onSelectFile(event, val) {
    if (event.target.files && event.target.files[0]) {
      val.name = event.target.files[0].name;

      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      // tslint:disable-next-line: no-shadowed-variable
      reader.onload = (event) => { // called once readAsDataURL is completed
        console.log(event);


        val.img = (event.target as FileReader).result;
      };
    }


  }
  uploadFileClick(id) {
    document.getElementById(id).click();
  }

  generateDynamicArray(item, no) {
    console.log(no);

    item.ratingArray.splice(0, item.ratingArray.length);
    for (let i = 0; i < no; i++) {
      item.ratingArray.push(i);
      console.log(i, no);

    }
    // item.ratingArray = item.ratingArray;
    console.log(item.ratingArray);

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
        this.formCurrentPage.field.splice(i, 1);
        delete this.selectedItem;
        this.selectedItem = this.formCurrentPage.field[i - 1];

      }
    });

  }
  removePage(i, mesg) {
    swal({
      title: 'Are you sure?',
      text: 'Do you want to remove ' + mesg + ' Page?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00B96F',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove!'
    }).then((result) => {
      if (result.value) {

        // if (i > this.model.attributes.length) {
        //   this.model.attributes.splice(i, 1);
        //   delete this.formCurrentPage;
        //   this.formCurrentPage = this.model.attributes[i - 1];
        // } else {
        //   this.formCurrentPage = [];
        // }

        this.deletePage();

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


    this.model.attributes.forEach(element => {

      element.field.forEach(el => {

        if (((el.fielType === 'email') && (el.emailList.length < 1))) {
          el.emailList = this.emailDropdownList;
        }
        if (((el.fielType === 'phone') && (el.phoneList.length < 1))) {
          el.phoneList = this.phoneDropdownList;
        }

        if (((el.fielType === 'website') && (el.httpList.length < 1))) {
          el.httpList = this.httpDropdownList;
        }
        if (((el.fielType === 'website') && (el.comList.length < 1))) {
          el.comList = this.comDropdownList;
        }
        if ((el.fielType === 'multiple') || (el.fielType === 'dropdown') || (el.fielType === 'picture') || (el.fielType === 'file')) {
          if (!this.isValidObject(el.validOption)) {
            el.validOption = {};
          }
        }
      });

    });



    this.formStorge[this.formListNo] = this.model;
    localStorage.setItem('formList', JSON.stringify(this.formStorge));

    // localStorage.setItem('form', JSON.stringify(this.model));
    // localStorage.setItem('formFields', JSON.stringify(this.formCurrentPage));
    this.checkingExistingForm = JSON.parse(localStorage.getItem('formName'));
    // this.router.navigate(['/formView']);

  }
  goToForm() {
    $('#assingModel').modal('hide');

    // this.router.navigate(['/formView'], { queryParams: { formId: this.formListNo } });
    const win = window.open('https://form-ab97d.firebaseapp.com/formView?formId=' + this.formListNo, '_blank');
    win.focus();
  }


  changeFontStyle(val) {
    this.model.theme.fontFamily = val;
    $('.name-input').css('fontFamily', val);
    // const nodes = document.getElementsByClassName('name-input') as HTMLCollectionOf<HTMLElement>;
    // for (let i = 0; i < nodes.length; i++) {
    //   // const node = nodes[i].getElementsByClassName('name-input') as HTMLCollectionOf<HTMLElement>;
    //   // for (let j = 0; j < node.length; j++) {
    //   nodes[i].style.fontFamily = val;
    //   //   console.log(node[j]);
    //   //   // tslint:disable-next-line: no-debugger
    //   //   debugger;
    //   // }
    // }
  }
  changeQuestColor() {
    const nodes = document.getElementsByClassName('maker-input') as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i].getElementsByClassName('name-input') as HTMLCollectionOf<HTMLElement>;
      for (let j = 0; j < node.length; j++) {
        node[j].style.color = this.model.theme.qestColor;

      }
    }
  }
  changeAnsColor() {
    const nodes = document.getElementsByClassName('user-input') as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i].getElementsByClassName('name-input') as HTMLCollectionOf<HTMLElement>;
      for (let j = 0; j < node.length; j++) {
        node[j].style.color = this.model.theme.ansColor;
      }
    }
  }

  addPages() {
    console.log(this.formCurrentPage);
    console.log('add page');

    this.model.attributes.push({ name: 'Page  ' + (this.model.attributes.length + 1), field: [] });
    console.log(this.model.attributes);

    this.formCurrentPage = this.model.attributes[this.model.attributes.length - 1];
    this.currentPageIndex = this.model.attributes.length - 1;
    console.log(this.formCurrentPage);

  }

  goToPage(index) {
    this.currentPageIndex = index;
    this.formCurrentPage = this.model.attributes[this.currentPageIndex];
  }

  deletePage() {
    console.log('delete Page');

    this.model.attributes.splice(this.currentPageIndex, 1);
    if (this.model.attributes.length == this.currentPageIndex) {
      this.currentPageIndex--;
    }
    if (this.currentPageIndex < 0) {
      this.currentPageIndex = 0;
      this.model.attributes.push({ name: 'Page 1', field: [] });
    }
    this.formCurrentPage = this.model.attributes[this.currentPageIndex];
  }


  navigateToPage(val) {
    this.currentPageIndex = this.currentPageIndex + val;
    this.formCurrentPage = this.model.attributes[this.currentPageIndex];

  }

  editPageName(page) {
    this.formCurrentPage = page;
  }


  validationSelect(val) {
    this.selectedItem.validOption = val;
    console.log(val);
    console.log(this.selectedItem.validOption);


  }


  updateForm() {
    // let input = new FormData;
    // input.append('id', this.model._id);
    // input.append('name', this.model.name);
    // input.append('description', this.model.description);
    // input.append('bannerImage', this.model.theme.bannerImage);
    // input.append('bgColor', this.model.theme.bgColor);
    // input.append('textColor', this.model.theme.textColor);
    // input.append('attributes', JSON.stringify(this.formCurrentPage));

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
    let validationArray = JSON.parse(JSON.stringify(this.formCurrentPage));
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
    input.append('attributes', JSON.stringify(this.formCurrentPage))
    // this.us.postDataApi('/user/formFill',input).subscribe(r=>{
    //   console.log(r);
    //   swal('Success','You have contact sucessfully','success');
    //   this.success = true;
    // },error=>{
    //   swal('Error',error.message,'error');
    // });
  }


}
