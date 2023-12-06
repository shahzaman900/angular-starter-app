import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
  <header class="brand-name">
    <img class="brand-logo" src="../assets/logo.svg" alt="">
  </header>
  <section class="content">
    <router-outlet></router-outlet>
  </section>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';
}
