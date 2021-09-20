/* eslint-disable @typescript-eslint/no-explicit-any */
import { HostBinding, HostListener, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  @HostBinding('style.backgroundColor') backgroundColor!: string;
  constructor(private route: ActivatedRoute, private router: Router) {}

  onScroll(mainLink: string, fragment: string) {
    this.router.navigate([mainLink], {
      //relativeTo: this.route,
      fragment: fragment,
      //queryParams: query,
      //queryParamsHandling: 'merge', // remove to replace all query params by provided
    });
  }

  @HostListener('load', ['$event'])
  onLoad() {
    this.backgroundColor = '#333';
  }
}
