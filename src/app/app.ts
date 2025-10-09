import { Component, signal } from '@angular/core';
import { HeadersComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [HeadersComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('investment-app');
}
