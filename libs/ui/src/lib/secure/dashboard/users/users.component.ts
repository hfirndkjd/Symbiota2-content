/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Email } from '../../../interfaces/email';
import { ScrollService } from '../../../scroll.service';
import { MailerUserService } from '../../../services/mailer-user.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'symbiota-dashboard-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  emails: Email[] = [];
  emailList: string[] = [];
  page = 1;
  last_page!: number;
  checks = false;
  data = [];
  constructor(
    private emailService: UserService,
    private scrollService: ScrollService,
    private mailerUserService: MailerUserService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.load();
    //console.log('email list: ', this.emailList);
    console.log(this.router.url);
  }

  scroll(link: string, fragment = '') {
    this.scrollService.onScroll(link, fragment);
  }

  load(): void {
    this.emailService.all(this.page).subscribe((res: any) => {
      //console.log('this is res: ', res);
      this.emails = res.data;
      console.log('emails  : ', res.data[0]);
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
        this.onSelect('', items[i].children[3].textContent);
      }
      this.mailerUserService.setReceivers(this.emailList);
    } else {
      this.checks = false;
      for (let i = 0; i < items.length; i++) {
        //this.emailList.splice(items[i].children[3].textContent, i);
        this.onSelect('', items[i].children[3].textContent);
      }
      this.mailerUserService.setReceivers(this.emailList);
      console.log(this.emailList);
    }
  }

  delete(e: any, id: number, index: number) {
    //console.log(e.target.checked, id);
    setTimeout(() => {
      if (confirm('Are you sure you want to delete this record?')) {
        this.emailService.delete(id).subscribe(() => {
          this.emails = this.emails.filter((u) => u.id !== id);
        });
      }
    }, 1000);
  }

  onSelect(item: any, item2: string) {
    if (item) {
      const email =
        item.target.parentElement.nextElementSibling.nextElementSibling
          .nextElementSibling.textContent;

      const idx = this.emailList.indexOf(email);

      if (idx === -1) {
        this.emailList.push(email);
      } else {
        this.emailList.splice(idx, 1);
      }
      this.mailerUserService.setReceivers(this.emailList);
      console.log(this.emailList);
    }

    if (item2) {
      const idx = this.emailList.indexOf(item2);
      if (this.checks === true) {
        this.emailList.push(item2);
      } else {
        this.emailList.splice(0, 1);
      }
      this.mailerUserService.setReceivers(this.emailList);
      //console.log(this.emailList);
    }
  }

  getChecks() {
    // console.log(this.form.getRawValue());
    //const formData = this.form.getRawValue();
    // const data = {
    //   name: formData.name,
    //   permissions: formData.permissions
    //     .filter((p: any) => p.value === true)
    //     .map((p: any) => p.id),
    // };
  }
}
