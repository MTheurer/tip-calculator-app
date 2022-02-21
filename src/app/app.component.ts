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
  people!: number;

  togglePercent(percent:number){
    this.percent = percent;
    console.log(percent);
  }
  getCustomPercent(customPercent:number){
    this.customPercent = customPercent;
    console.log(customPercent);
  }
  getBillTotal(bill:number){
    this.bill = bill;
  console.log(bill);
  }

  getTotalPeople(people:number){
    this.people = people;
    console.log(people);
  }

  /*calculateTotals(){
    let billPerPerson = bill/people
    let tipAmount = billPerPerson*percent
    let totalPerPerson = billPerPerson + tipAmount
  }*/
}
