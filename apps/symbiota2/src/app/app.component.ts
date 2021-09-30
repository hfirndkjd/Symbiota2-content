/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@symbiota/api-interfaces';
import { Router } from '@angular/router';
import { ScrollService } from 'libs/ui/src/lib/scroll.service';
import { HomeService } from 'libs/ui/src/lib/home.service';
import { AuthService } from 'libs/ui/src/lib/services/auth.service';

@Component({
  selector: 'symbiota-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(
    private http: HttpClient,
    public router: Router,
    private scrollService: ScrollService,
    private homeService: HomeService,
    private authService: AuthService
  ) {}

  scroll(link: string, fragment: string = '') {
    if (link === 'login') {
      this.logout();
    }
    this.scrollService.onScroll(link, fragment);
  }
  activateHome() {
    this.homeService.home = true;
    console.log(
      'this is home from service inside header:',
      this.homeService.home
    );
  }

  logout(): void {
    this.authService.logout().subscribe(() => console.log('success'));
  }
}
