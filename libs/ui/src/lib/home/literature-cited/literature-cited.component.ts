import { Component } from '@angular/core';
import { ScrollService } from '../../scroll.service';

@Component({
  selector: 'symbiota-literature-cited',
  templateUrl: './literature-cited.component.html',
  styleUrls: ['./literature-cited.component.css'],
})
export class LiteratureCitedComponent {
  constructor(private scrollService: ScrollService) {}

  scroll(link: string, fragment: string = '') {
    this.scrollService.onScroll(link, fragment);
  }
}
