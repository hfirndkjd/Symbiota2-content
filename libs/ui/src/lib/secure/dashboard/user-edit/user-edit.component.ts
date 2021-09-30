import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from '../../../interfaces/role';
import { RoleService } from '../../../services/role.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'symbiota-dashboard-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
  form!: FormGroup;
  roles: Role[] = [];
  id!: number;

  constructor(
    private formBuilder: FormBuilder,
    private roleService: RoleService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      roleId: '',
    });

    this.roleService.all().subscribe((roles) => (this.roles = roles));

    this.id = this.route.snapshot.params.id;

    this.userService.get(this.id).subscribe((user) => {
      this.form.patchValue({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        roleId: user.role.id,
      });
    });
  }

  submit(): void {
    this.userService
      .update(this.id, this.form.getRawValue())
      .subscribe(() => this.router.navigate(['dashboard/users']));
  }
}
