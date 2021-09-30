/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../../home.service';
import { ScrollService } from '../../scroll.service';

@Component({
  selector: 'symbiota-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  home!: boolean;
  constructor(
    private router: Router,
    private scrollService: ScrollService,
    private homeService: HomeService
  ) {
    this.home = homeService.home;
    //console.log('home from service: ', homeService.home);
    //console.log('home inside constructor', this.home);
  }

  onScroll(link: string, fragment: string = '') {
    this.scrollService.onScroll(link, fragment);
    this.home = false;
    //console.log(link, fragment);
    //console.log('home when the link is clicked ', this.home);
  }
}
