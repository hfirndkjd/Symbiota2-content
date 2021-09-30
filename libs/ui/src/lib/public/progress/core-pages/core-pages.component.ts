import { Component } from '@angular/core';
import { ScrollService } from '../../../scroll.service';

@Component({
  selector: 'symbiota-core-pages',
  templateUrl: './core-pages.component.html',
  styleUrls: ['./core-pages.component.css'],
})
export class CorePagesComponent {
  constructor(private scrollService: ScrollService) {}

  scroll(link: string, fragment: string = '') {
    this.scrollService.onScroll(link, fragment);
  }
}
