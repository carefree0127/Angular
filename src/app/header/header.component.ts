import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sitename = 'Hello World';
  sitelogo = '/assets/images/logo.png';
  sitesubtitle = '記載著 Will 在網路世界的學習心得與技術分享';
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
