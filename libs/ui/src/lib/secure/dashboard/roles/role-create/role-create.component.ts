/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Permission } from 'libs/ui/src/lib/interfaces/permission';
import { PermissionService } from 'libs/ui/src/lib/services/permission.service';
import { RoleService } from 'libs/ui/src/lib/services/role.service';

@Component({
  selector: 'symbiota-dashboard-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.css'],
})
export class RoleCreateComponent implements OnInit {
  form!: FormGroup;
  permissions: Permission[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private permissionService: PermissionService,
    private roleService: RoleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      permissions: this.formBuilder.array([]),
    });

    this.permissionService.all().subscribe((permissions) => {
      this.permissions = permissions;
      this.permissions.forEach((p) => {
        this.permissionArray.push(
          this.formBuilder.group({
            value: false,
            id: p.id,
          })
        );
      });
    });
  }

  get permissionArray(): FormArray {
    return this.form.get('permissions') as FormArray;
  }

  submit(): void {
    // console.log(this.form.getRawValue());
    const formData = this.form.getRawValue();

    const data = {
      name: formData.name,
      permissions: formData.permissions
        .filter((p: any) => p.value === true)
        .map((p: any) => p.id),
    };

    //console.log(data); this can help for bulk option
    this.roleService
      .create(data)
      .subscribe(() => this.router.navigate(['/dashboard/roles']));
  }
}
