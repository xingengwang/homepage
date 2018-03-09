import {Component, Input} from '@angular/core';
import {MenuItem} from './menu-item';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() menuItems: MenuItem[];
}
