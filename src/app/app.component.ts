import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Guys';

  currentYear: any;

  constructor() {
    this.currentYear = new Date().getFullYear();
  }
}
