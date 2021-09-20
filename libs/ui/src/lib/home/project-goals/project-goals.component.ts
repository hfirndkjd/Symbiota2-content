import { Component } from '@angular/core';
import { ScrollService } from '../../scroll.service';

@Component({
  selector: 'symbiota-project-goals',
  templateUrl: './project-goals.component.html',
  styleUrls: ['./project-goals.component.css'],
})
export class ProjectGoalsComponent {
  constructor(private scrollService: ScrollService) {}

  scroll(link: string, fragment: string = '') {
    this.scrollService.onScroll(link, fragment);
  }
}
