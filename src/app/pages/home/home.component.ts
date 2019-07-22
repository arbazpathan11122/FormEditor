import { Component, OnInit } from '@angular/core';
import { icons_and_fields } from '../../class/data'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  icon_field: any = icons_and_fields;
  constructor() {


  }

  ngOnInit() {


  }


  allowDrop(ev) {
    ev.preventDefault();
    // console.log('drop over', ev);
    ev.currentTarget.style.background = 'red'

  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    
  }

  drop(ev) {
    ev.preventDefault();

    var z = document.createElement('div'); // is a node
    z.setAttribute("id", "header-format")
z.innerHTML = '  <div class="mb-40"><input class="name-input" placeholder="Write Your Text Here" aria-invalid="false" style=""></div><div class="#"><p class="user-answer">Short answer text</p></div>';
// document.body.appendChild(z);

    var data = '<div class=\"formtitle\"><p class=\"page-title\">This the description which also can be added.</p></div>'
    // ev.dataTransfer.getData("text");
    console.log(z);
    
    ev.target.appendChild(z);
    
  }
}
