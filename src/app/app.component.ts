import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <main-header></main-header>
      <router-outlet></router-outlet>
      <main-footer></main-footer>
  `,
  styles: [`
  
  `]
})
export class AppComponent {
  title = 'Carlos V.';
}
