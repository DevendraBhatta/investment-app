import { Component, signal } from '@angular/core';
import { HeadersComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';

@Component({
  selector: 'app-root',
  imports: [HeadersComponent, UserInputComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('investment-app');
}
