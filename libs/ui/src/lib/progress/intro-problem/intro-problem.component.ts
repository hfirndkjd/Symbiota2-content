import { Component } from '@angular/core';
import { ScrollService } from '../../scroll.service';

@Component({
  selector: 'symbiota-intro-problem',
  templateUrl: './intro-problem.component.html',
  styleUrls: ['./intro-problem.component.css'],
})
export class IntroProblemComponent {
  constructor(private scrollService: ScrollService) {}

  scroll(link: string, fragment: string = '') {
    this.scrollService.onScroll(link, fragment);
  }
}
