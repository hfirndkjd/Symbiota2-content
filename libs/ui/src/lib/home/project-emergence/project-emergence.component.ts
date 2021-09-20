import { Component } from '@angular/core';
import { ScrollService } from '../../scroll.service';

@Component({
  selector: 'symbiota-project-emergence',
  templateUrl: './project-emergence.component.html',
  styleUrls: ['./project-emergence.component.css'],
})
export class ProjectEmergenceComponent {
  constructor(private scrollService: ScrollService) {}

  scroll(link: string, fragment: string = '') {
    this.scrollService.onScroll(link, fragment);
  }
}
