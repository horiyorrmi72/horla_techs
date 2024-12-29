import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor() { }
  isNavVisible: boolean = false;
  menuIcon = document.getElementById('menu-icon');
  navLinks = document.getElementById('nav-links');

  toggleNav() {
    this.isNavVisible = !this.isNavVisible
  }
}
