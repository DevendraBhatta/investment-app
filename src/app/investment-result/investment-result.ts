import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-investment-result',
  imports: [],
  templateUrl: './investment-result.html',
  styleUrl: './investment-result.css'
})
export class InvestmentResult {

  @Input() result?:{
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest:number,
    totalAmountInvested:number
  }[];
}
