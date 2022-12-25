import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(private _AuthService: AuthService, private _Router: Router) {}

  ngOnInit(): void {}
  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(null, [
      Validators.minLength(3),
      Validators.maxLength(16),
      Validators.required,
    ]),
    lastName: new FormControl(null, [
      Validators.minLength(3),
      Validators.maxLength(16),
      Validators.required,
    ]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
    ]),
    profile_pic: new FormControl(null, Validators.required),
  });
  img: any;

  choosePhoto(event: any) {
    this.img = event.target.files[0];
    console.log(this.img);
  }
  success: string = '';
  unSuccess: string = '';
  register() {
    let firstName = (<HTMLInputElement>document.getElementById('firstName'))
      .value;
    let lastName = (<HTMLInputElement>document.getElementById('lastName'))
      .value;
    let email = (<HTMLInputElement>document.getElementById('email')).value;
    let password = (<HTMLInputElement>document.getElementById('password'))
      .value;
    let formData = new FormData();
    formData.append('profile_pic', this.img);
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('password', password);
    this._AuthService.registerForm(formData).subscribe((res) => {
      console.log(res);
      if (res.message == 'success') {
        this.success = res.message;
        setTimeout(() => {
          (<HTMLDivElement>document.getElementById('success')).style.display =
            'none';
        }, 1000);
      } else {
        this.unSuccess = res.message;
        setTimeout(() => {
          (<HTMLDivElement>document.getElementById('unSuccess')).style.display =
            'none';
        }, 1000);
      }
    });
  }
  /**********/
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
    ]),
  });
  unSuccessLogIn: string = '';

  async logInForm() {
    await this._AuthService.login(this.loginForm.value).subscribe((res) => {
      console.log(res);
      if (res.message == 'success') {
        localStorage.setItem('userToken', res.token);
        this._AuthService.setUser();
        this._Router.navigate(['userNews']);
      } else {
        this.unSuccessLogIn = res.message;
        setTimeout(() => {
          (<HTMLDivElement>(
            document.getElementById('unSuccessLogIn')
          )).style.display = 'none';
        }, 2000);
      }
    });
  }
}
