/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, OnInit } from '@angular/core';
import { Role } from '../../../interfaces/role';
import { ScrollService } from '../../../scroll.service';
import { RoleService } from '../../../services/role.service';

@Component({
  selector: 'symbiota-dashboard-role',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css'],
})
export class RolesComponent implements OnInit {
  roles: Role[] = [];

  constructor(
    private roleService: RoleService,
    private scrollService: ScrollService
  ) {}

  ngOnInit(): void {
    this.roleService.all().subscribe((roles) => (this.roles = roles));
  }

  scroll(link: string, fragment = '') {
    this.scrollService.onScroll(link, fragment);
  }

  delete(e: any, id: number, index: number) {
    if (confirm('Are you sure you want to delete the record?')) {
      this.roleService
        .delete(id)
        .subscribe(() => (this.roles = this.roles.filter((r) => r.id !== id)));
    }
  }
}
