/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserCreateInterface } from '../../interfaces/user-create';
// import { NgForm } from '@angular/forms';
// import { environment } from '../../../../../../apps/api/src/environments/environment';

@Component({
  selector: 'symbiota-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  @ViewChild('f') signupForm!: NgForm;
  constructor(private router: Router, private authService: AuthService) {}

  firstName = '';
  lastName = '';
  email = '';
  password = '';
  passwordConfirm = '';

  onSubmit(postData: UserCreateInterface) {
    this.authService
      .register(postData)
      .subscribe(() => this.router.navigate(['/login']));
    //console.log(postData);
    setTimeout(() => {
      this.signupForm.reset();
    }, 2000);

    //console.log(form);
  }
}
