import {Component, Input} from '@angular/core';
import {MenuItem} from './menu-item';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() menuItems: MenuItem[];
  constructor(private router: Router, private route: ActivatedRoute) {
  }

  navigateTo(route: string) {
    this.router.navigate([`./${route}`], {relativeTo: this.route});
  }
}
