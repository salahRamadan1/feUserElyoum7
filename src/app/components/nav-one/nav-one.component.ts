import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-one',
  templateUrl: './nav-one.component.html',
  styleUrls: ['./nav-one.component.css'],
})
export class NavOneComponent implements OnInit {
  constructor() {}
  date: any;

  ngOnInit(): void {
    setInterval(() => {
      this.date = new Date().toLocaleTimeString();
    }, 1000);
  }
}
