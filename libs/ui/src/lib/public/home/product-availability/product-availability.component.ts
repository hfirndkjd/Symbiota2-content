import { Component } from '@angular/core';
import { ScrollService } from '../../../scroll.service';

@Component({
  selector: 'symbiota-product-availability',
  templateUrl: './product-availability.component.html',
  styleUrls: ['./product-availability.component.css'],
})
export class ProductAvailabilityComponent {
  //@ViewChild('index', { static: true }) index!: ElementRef;
  id!: string;
  constructor(private scrollService: ScrollService) {}

  scroll(link: string, fragment: string = '') {
    this.scrollService.onScroll(link, fragment);
    setTimeout(
      ((
        document.querySelector('#' + fragment) as HTMLElement
      ).style.backgroundColor = '#333'),
      3000
    );
  }
}
