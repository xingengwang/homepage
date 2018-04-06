import {NgModule} from '@angular/core';
import {NavbarComponent} from './navbar.component';
import {CommonModule} from '@angular/common';
import {MatListModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {MainComponent} from '../main/main.component';


@NgModule({
  imports: [
      RouterModule.forChild([
          {path: '', component: MainComponent},
      ]),
    CommonModule,
    MatListModule],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class NarbarModule {
}
