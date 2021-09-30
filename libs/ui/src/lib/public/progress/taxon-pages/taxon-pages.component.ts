import { Component } from '@angular/core';
import { ScrollService } from '../../../scroll.service';

@Component({
  selector: 'symbiota-taxon-pages',
  templateUrl: './taxon-pages.component.html',
  styleUrls: ['./taxon-pages.component.css'],
})
export class TaxonPagesComponent {
  constructor(private scrollService: ScrollService) {}

  scroll(link: string, fragment: string = '') {
    this.scrollService.onScroll(link, fragment);
  }
}
