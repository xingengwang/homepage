import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

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

  constructor(matIconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    matIconRegistry.addSvgIcon('fb_icon', sanitizer.bypassSecurityTrustResourceUrl('assets/F_icon.svg'));
    matIconRegistry.addSvgIcon('li_icon', sanitizer.bypassSecurityTrustResourceUrl('assets/Linkedin_icon.svg'));
  }
}
