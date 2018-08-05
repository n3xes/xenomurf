import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'x-app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss']
})
export class AppFooterComponent implements OnInit {
  yearCurrent = new Date().getFullYear();

  constructor() {
  }

  ngOnInit() {
  }
}
