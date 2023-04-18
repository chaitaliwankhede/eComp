import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-sidebar',
  templateUrl: './header-sidebar.component.html',
  styleUrls: ['./header-sidebar.component.scss']
})
export class HeaderSidebarComponent implements OnInit {
  navList:any = [];
  navitemName = '';
  constructor() {}

  ngOnInit() {
    this.navList = ['Item1', 'Item2'];
    this.setNavItemName(this.navList[0]);
  }

  setNavItemName(navName: any, clickEvent?: any) {
    if(navName !== this.navitemName) {
      this.navitemName = navName
    }
  }
}
