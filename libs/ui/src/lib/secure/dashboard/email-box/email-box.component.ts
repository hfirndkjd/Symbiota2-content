/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MailerMailingListService } from '../../../services/mailer-mailing-list.service';
import { SendEmailService } from '../../../services/send-email.service';
// import { SendEmailDto } from 'libs/api-email/src/lib/model/send-email.dto';

@Component({
  selector: 'symbiota-dashboard-email-box',
  templateUrl: './email-box.component.html',
  styleUrls: ['./email-box.component.css'],
})
export class EmailBoxComponent implements OnInit {
  form!: FormGroup;
  process = false;
  done = false;
  error = false;
  processText = 'Submission in process, please wait..';
  doneText = 'Message Successfully sent.';
  errorText = 'There was a problem with form please try again later.';
  emails = [];
  constructor(
    private formBuilder: FormBuilder,
    private sendEmailService: SendEmailService,
    private router: Router,
    private mailerMailingListService: MailerMailingListService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      to: [this.mailerMailingListService.getReceivers()],
      subject: '',
      html: '',
    });

    //this.roleService.all().subscribe((roles) => (this.roles = roles));
  }

  submit(): void {
    this.process = true;

    setTimeout(() => {
      this.sendEmailService.sendEmail(this.form.getRawValue()).subscribe(
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
    }, 10000);
  }
}
