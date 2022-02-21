import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tip-calculator-app';

  togglePercent(){
    console.log("percentage clicked")
  }
  getCustomPercent(percent:string){
    console.log(percent);
  }
  getBillTotal(bill:string){
  console.log(bill);
  }

  getTotalPeople(people:string){
    console.log(people);
  }

  /*calculateTotals(){
    let billPerPerson = bill/people
    let tipAmount = billPerPerson*percent
    let totalPerPerson = billPerPerson + tipAmount
  }*/
}
