/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailService } from 'libs/ui/src/lib/services/email.service';
// import { Role } from '../../../interfaces/role';
// import { RoleService } from '../../../services/role.service';

@Component({
  selector: 'symbiota-dashboard-email-edit',
  templateUrl: './email-edit.component.html',
  styleUrls: ['./email-edit.component.css'],
})
export class EmailEditComponent implements OnInit {
  form!: FormGroup;
  // roles: E[] = [];
  id!: number;

  constructor(
    private formBuilder: FormBuilder,
    private emailService: EmailService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      email: '',
      description: '',
    });

    //this.roleService.all().subscribe((roles) => (this.roles = roles));

    this.id = this.route.snapshot.params.id;

    this.emailService.get(this.id).subscribe((email) => {
      this.form.patchValue({
        name: email.name,
        email: email.email,
        description: email.description,
      });
    });
  }

  submit(): void {
    this.emailService
      .update(this.id, this.form.getRawValue())
      .subscribe(() => this.router.navigate(['dashboard/mailing-list']));
  }
}
