import { Component } from '@angular/core';
import { ScrollService } from '../../../scroll.service';

@Component({
  selector: 'symbiota-image-pages',
  templateUrl: './image-pages.component.html',
  styleUrls: ['./image-pages.component.css'],
})
export class ImagePagesComponent {
  constructor(private scrollService: ScrollService) {}

  scroll(link: string, fragment: string = '') {
    this.scrollService.onScroll(link, fragment);
  }
}
