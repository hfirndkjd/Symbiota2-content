/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { timestamp } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'symbiota-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //@ViewChild('f') signupForm!: NgForm;
  form!: FormGroup;
  constructor(
    private http: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  // onSubmit() {
  //   //postData: { email: string; password: string }
  //   // console.log(this.form.getRawValue());
  //   this.authService
  //     .login(this.form.getRawValue())
  //     .subscribe(() => this.router.navigate(['dashboard']));
  // }

  onSubmit() {
    //postData: { email: string; password: string }
    // console.log(this.form.getRawValue());
    this.authService
      .login(this.form.getRawValue())
      .subscribe((res) => console.log('this is res inside login :', res));
  }
}
