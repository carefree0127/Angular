import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sitename = 'Hello World';
  sitelogo = '/assets/images/logo.png';
  showIcons = 1;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.sitename = 'The Will Will Web';
     }, 2000);

  }

  changeTitle(){
    this.sitename += '！';
  }

}
