import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tip-calculator-app';
  percent!: number;
  customPercent!:number;
  bill!: number;
  people: number = 1;

  tipAmount!: string;
  totalPerPerson!:string;

  formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  calculateTotals(){
    let billPerPerson = this.bill/this.people;
    let tipAmount = (billPerPerson)*(this.percent/100);
    let totalPerPerson = billPerPerson + tipAmount;

    let percent = this.percent
    this.tipAmount = this.formatter.format(tipAmount);
    this.totalPerPerson = this.formatter.format(totalPerPerson);
  }

  togglePercent(percent:number){
    this.percent = percent;
    this.calculateTotals()
  }
  getCustomPercent(customPercent:number){
    //implement custom percent
  }
  getBillTotal(bill:number){
    this.bill = bill;
    this.calculateTotals()
  }
//default value 1
  getTotalPeople(people:number){
    this.people = people;
    this.calculateTotals()
  }
}
