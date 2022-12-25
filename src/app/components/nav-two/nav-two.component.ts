import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-nav-two',
  templateUrl: './nav-two.component.html',
  styleUrls: ['./nav-two.component.css'],
})
export class NavTwoComponent implements OnInit {
  isLoggedIn: boolean = false;
  constructor(private _AuthService: AuthService) {
    this._AuthService.user.subscribe(() => {
      if (this._AuthService.user.getValue() == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
      }
    });
  }

  ngOnInit(): void {}
  logOut() {
    this._AuthService.logOutFromApp();
  }
}
