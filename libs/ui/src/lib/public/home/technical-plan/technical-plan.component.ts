import { Component } from '@angular/core';
import { ScrollService } from '../../../scroll.service';

@Component({
  selector: 'symbiota-technical-plan',
  templateUrl: './technical-plan.component.html',
  styleUrls: ['./technical-plan.component.css'],
})
export class TechnicalPlanComponent {
  constructor(private scrollService: ScrollService) {}

  scroll(link: string, fragment: string = '') {
    this.scrollService.onScroll(link, fragment);
  }
}
