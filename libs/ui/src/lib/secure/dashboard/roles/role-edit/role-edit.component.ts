/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Permission } from 'libs/ui/src/lib/interfaces/permission';
import { Role } from 'libs/ui/src/lib/interfaces/role';
import { PermissionService } from 'libs/ui/src/lib/services/permission.service';
import { RoleService } from 'libs/ui/src/lib/services/role.service';

@Component({
  selector: 'symbiota-dashboard-role-edit',
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.css'],
})
export class RoleEditComponent implements OnInit {
  form!: FormGroup;
  permissions: Permission[] = [];
  id!: number;
  constructor(
    private formBuilder: FormBuilder,
    private permissionService: PermissionService,
    private roleService: RoleService,
    private router: Router,
    private route: ActivatedRoute
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

    this.id = this.route.snapshot.params.id;

    this.roleService.get(this.id).subscribe((role: Role) => {
      const values = this.permissions.map((p) => {
        return {
          value: role.permissions?.some((r) => r.id === p.id),
          id: p.id,
        };
      });
      //console.log(role);
      this.form.patchValue({
        name: role.name,
        permissions: values,
      });
    });
  }

  get permissionArray(): FormArray {
    return this.form.get('permissions') as FormArray;
  }

  submit(): void {
    const formData = this.form.getRawValue();

    const data = {
      name: formData.name,
      permissions: formData.permissions
        .filter((p: any) => p.value === true)
        .map((p: any) => p.id),
    };

    this.roleService
      .update(this.id, data)
      .subscribe(() => this.router.navigate(['/dashboard/roles']));
  }
}
