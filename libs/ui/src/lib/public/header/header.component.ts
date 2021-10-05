import { Component } from '@angular/core';
import { ScrollService } from '../../scroll.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'symbiota-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(
    private scrollService: ScrollService,
    private authService: AuthService
  ) {}

  scroll(link: string, fragment: string = '') {
    if (link === 'login') {
      this.logout();
    }
    this.scrollService.onScroll(link, fragment);
  }

  logout(): void {
    this.authService.logout().subscribe(() => console.log('success'));
  }
}
