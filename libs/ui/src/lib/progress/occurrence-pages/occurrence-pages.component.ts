import { Component } from '@angular/core';
import { ScrollService } from '../../scroll.service';

@Component({
  selector: 'symbiota-occurrence-pages',
  templateUrl: './occurrence-pages.component.html',
  styleUrls: ['./occurrence-pages.component.css'],
})
export class OccurrencePagesComponent {
  constructor(private scrollService: ScrollService) {}

  scroll(link: string, fragment: string = '') {
    this.scrollService.onScroll(link, fragment);
  }
}
