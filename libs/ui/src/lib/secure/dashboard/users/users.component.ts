/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../interfaces/user';
import { ScrollService } from '../../../scroll.service';
import { MailerMailingListService } from '../../../services/mailer-mailing-list.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'symbiota-dashboard-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  emailList: string[] = [];
  page = 1;
  last_page!: number;
  checks = false;
  data = [];

  constructor(
    private userService: UserService,
    private mailerMailingListService: MailerMailingListService,
    private scrollService: ScrollService,
    public router: Router
  ) {}

  load(): void {
    this.userService.all(this.page).subscribe((res: any) => {
      this.users = res.data;
      console.log(res.data);
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

  // bulk(e: any) {
  //   if (e.target.checked === true) {
  //     this.checks = true;
  //     console.log(e.target.checked);
  //   } else {
  //     this.checks = false;
  //   }
  // }

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

  ngOnInit(): void {
    this.load();
    console.log('email list: ', this.emailList);
  }

  scroll(link: string, fragment = '') {
    this.scrollService.onScroll(link, fragment);
  }

  bulk(e: any) {
    //console.log('this is bulk: ' + e.target);
    const items =
      e.target.parentElement.parentElement.parentElement.nextElementSibling
        .children;
    if (e.target.checked === true) {
      this.checks = true;
      //this.emailList = this.emails;
      console.log(e.target.checked);

      //console.log(items);
      this.emailList = [];
      for (let i = 0; i < items.length; i++) {
        //this.emailList.push('', items[i].children[3].textContent);
        this.onSelect('', items[i].children[4].textContent);
      }
      this.mailerMailingListService.setReceivers(this.emailList);
    } else {
      this.checks = false;
      for (let i = 0; i < items.length; i++) {
        //this.emailList.splice(items[i].children[3].textContent, i);
        this.onSelect('', items[i].children[4].textContent);
      }
      this.mailerMailingListService.setReceivers(this.emailList);
      console.log(this.emailList);
    }
  }

  onSelect(item: any, item2: string) {
    if (item) {
      const email =
        item.target.parentElement.nextElementSibling.nextElementSibling
          .nextElementSibling.nextElementSibling.textContent;

      const idx = this.emailList.indexOf(email);

      if (idx === -1) {
        this.emailList.push(email);
      } else {
        this.emailList.splice(idx, 1);
      }
      this.mailerMailingListService.setReceivers(this.emailList);
      console.log(this.emailList);
    }

    if (item2) {
      const idx = this.emailList.indexOf(item2);
      if (this.checks === true) {
        this.emailList.push(item2);
      } else {
        this.emailList.splice(0, 1);
      }
      this.mailerMailingListService.setReceivers(this.emailList);
      //console.log(this.emailList);
    }
  }
}
