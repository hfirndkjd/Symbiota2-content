/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { User } from '../../../interfaces/user';
import { ScrollService } from '../../../scroll.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'symbiota-dashboard-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  page = 1;
  last_page!: number;
  checks = false;
  data = [];
  constructor(
    private userService: UserService,
    private scrollService: ScrollService
  ) {}

  ngOnInit(): void {
    this.load();
  }

  scroll(link: string, fragment = '') {
    this.scrollService.onScroll(link, fragment);
  }

  load(): void {
    this.userService.get(this.page).subscribe((res: any) => {
      this.users = res.data;
      this.last_page = res.meta.last_page;
    });
  }

  next(): void {
    if (this.page === this.last_page) {
      return;
    }
    this.page++;
    this.load();
  }

  prev(): void {
    if (this.page === 1) {
      return;
    }
    this.page--;
    this.load();
  }

  bulk(e: any) {
    if (e.target.checked === true) {
      this.checks = true;
      console.log(e.target.checked);
    } else {
      this.checks = false;
    }
  }

  delete(e: any, id: number, index: number) {
    //console.log(e.target.checked, id);
    setTimeout(() => {
      if (confirm('Are you sure you want to delete this record?')) {
        this.userService.delete(id).subscribe(() => {
          this.users = this.users.filter((u) => u.id !== id);
        });
      }
    }, 1000);
  }
}
