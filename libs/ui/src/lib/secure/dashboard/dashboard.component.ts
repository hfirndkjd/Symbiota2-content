/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../classes/auth';
import { User } from '../../interfaces/user';
import { ScrollService } from '../../scroll.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'symbiota-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  user!: User;
  constructor(
    private scrollService: ScrollService,
    private authService: AuthService,
    private router: Router
  ) {
    // const cook = getCookie;
  }

  scroll(link: string, fragment: string = '') {
    //console.log('clicked', link);
    this.scrollService.onScroll(link, fragment);
  }

  ngOnInit(): void {
    this.authService.currentUser().subscribe(
      (user) => Auth.userEmitter.emit(user),
      () => this.router.navigate(['/login'])
    );

    Auth.userEmitter.subscribe((user) => (this.user = user));
  }
}
