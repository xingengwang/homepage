import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  menuItems = [{
    route: '/main',
    name: 'Main'
  }, {
    route: '/about-me',
    name: 'About Me'
  }, {
    route: '/contact',
    name: 'Contact Me'
  }];
}
