import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  hideNav: any;
  currentUser: any;
  loggedInUserName = '';
  loggedInUserShortName = '';
  @HostListener('document:click', ['$event']) onDocumentClick(event: any) {
    this.hideNav = false;
  }
  constructor(
    public router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.hideNav = false; // when navigated close the side nav
      }
    });
  }

  ngOnInit() {
    this.currentUser = 'User Name';
    this.loggedInUserName = 'User Name';
    this.loggedInUserShortName = 'UN';
  }

  onCollapse(event?: any) {
    this.hideNav = !this.hideNav;
  }
}
