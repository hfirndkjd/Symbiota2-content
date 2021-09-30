import { Component } from '@angular/core';
import { ScrollService } from '../../../scroll.service';

@Component({
  selector: 'symbiota-intro-append',
  templateUrl: './intro-append.component.html',
  styleUrls: ['./intro-append.component.css'],
})
export class IntroAppendComponent {
  constructor(private scrollService: ScrollService) {}

  scroll(link: string, fragment: string = '') {
    this.scrollService.onScroll(link, fragment);
  }
}
