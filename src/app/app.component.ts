import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  menuItems = [{
    route: '',
    name: 'Main'
  }, {
    route: '',
    name: 'About Me'
  }, {
    route: '',
    name: 'Contact Me'
  }];
}
