import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  template: `
  <header class="brand-name">
    <img class="brand-logo" src="../assets/logo.svg" alt="">
  </header>
  <section class="content">
    <app-home></app-home>
  </section>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';
}
