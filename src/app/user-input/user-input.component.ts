import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})

export class UserInputComponent {

  enteredInitialInvestment='0';
  enteredAnnualInvestemnt = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';


  onSubmit() {
    console.log('SUBMITTED!');
    console.log(this.enteredInitialInvestment);
    console.log(this.enteredAnnualInvestemnt);
    console.log(this.enteredDuration);
    console.log(this.onSubmit);
  }
}