/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailService } from 'libs/ui/src/lib/services/email.service';

@Component({
  selector: 'symbiota-dashboard-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css'],
})
export class EmailCreateComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private emailService: EmailService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      email: '',
      description: '',
    });

    //this.roleService.all().subscribe((roles) => (this.roles = roles));
  }

  submit(): void {
    this.emailService
      .create(this.form.getRawValue())
      .subscribe(() => this.router.navigate(['dashboard/mailing-list']));
  }
}
