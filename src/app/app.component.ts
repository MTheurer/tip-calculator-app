import { Component, ViewChild} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tip-calculator-app';

  @ViewChild('billbox') billbox!:any;
  @ViewChild('peoplebox') peoplebox!:any;
  @ViewChild('custombox') custombox!:any;

  percent!: number;
  customPercent!:number;
  bill!: number;
  people: number = 1;

  tipAmount: string = '$0.00';
  totalPerPerson:string = '$0.00';


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
  getBillTotal(bill:number){
    this.bill = bill;
    this.calculateTotals()
  }
//default value 1
  getTotalPeople(people:number){
    this.people = people;
    this.calculateTotals()
  }
  
  reset(){
    this.billbox.nativeElement.value = ' ';
    this.peoplebox.nativeElement.value = ' ';
    this.custombox.nativeElement.value = ' ';
    this.tipAmount = "$0.00"
    this.totalPerPerson = "$0.00"
  }
}
