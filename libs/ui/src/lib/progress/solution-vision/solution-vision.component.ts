import { Component } from '@angular/core';
import { ScrollService } from '../../scroll.service';

@Component({
  selector: 'symbiota-solution-vision',
  templateUrl: './solution-vision.component.html',
  styleUrls: ['./solution-vision.component.css'],
})
export class SolutionVisionComponent {
  constructor(private scrollService: ScrollService) {}

  scroll(link: string, fragment: string = '') {
    this.scrollService.onScroll(link, fragment);
  }
}
