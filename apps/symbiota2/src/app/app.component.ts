/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@symbiota/api-interfaces';
import { Router } from '@angular/router';
import { HomeService } from 'libs/ui/src/lib/home.service';
import { AuthService } from 'libs/ui/src/lib/services/auth.service';
import { ScrollService } from 'libs/ui/src/lib/scroll.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmailService } from 'libs/ui/src/lib/services/email.service';

@Component({
  selector: 'symbiota-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  hello$ = this.http.get<Message>('/api/hello');
  form!: FormGroup;
  process = false;
  done = false;
  error = false;
  processText = 'Submission in process, please wait..';
  doneText = 'Email Successfully Added.';
  errorText = 'There was a problem with form please try again later.';

  constructor(
    private http: HttpClient,
    public router: Router,
    private homeService: HomeService,
    private authService: AuthService,
    private scrollService: ScrollService,
    private formBuilder: FormBuilder,
    private emailService: EmailService
  ) {}

  activateHome() {
    this.homeService.home = true;
    console.log(
      'this is home from service inside header:',
      this.homeService.home
    );
  }

  scroll(link: string, fragment: string = '') {
    if (link === 'login') {
      this.logout();
    }
    this.scrollService.onScroll(link, fragment);
  }

  logout(): void {
    this.authService.logout().subscribe(() => console.log('success'));
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      email: '',
      description: 'Just a place holder',
    });

    //this.roleService.all().subscribe((roles) => (this.roles = roles));
  }

  // submit(): void {
  //   console.log('button clicked');
  //   this.emailService.create(this.form.getRawValue()).subscribe();
  // }

  submit(): void {
    this.process = true;

    setTimeout(() => {
      this.emailService.create(this.form.getRawValue()).subscribe(
        () => {
          this.process = false;
          this.done = true;
        },
        () => {
          this.process = false;
          this.done = false;
          this.error = true;
          //console.log(err);
        }
      );
    }, 1200);

    setTimeout(() => {
      this.form.reset();
      this.process = false;
      this.done = false;
      this.error = false;
    }, 5000);
  }
}
