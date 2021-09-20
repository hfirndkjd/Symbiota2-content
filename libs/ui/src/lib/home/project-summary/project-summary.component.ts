import { Component } from '@angular/core';
import { ScrollService } from '../../scroll.service';

@Component({
  selector: 'symbiota-project-summary',
  templateUrl: './project-summary.component.html',
  styleUrls: ['./project-summary.component.css'],
})
export class ProjectSummaryComponent {
  constructor(private scrollService: ScrollService) {}

  scroll(link: string, fragment: string = '') {
    this.scrollService.onScroll(link, fragment);
  }
}
