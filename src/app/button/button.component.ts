import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent implements OnInit {

  @Input() text!: string;
  @Output() btnClick = new EventEmitter();


  toggle = true;
  status = "Enable";

  constructor() { }

  ngOnInit(): void {
  }

emit() {
  this.btnClick.emit();
  this.toggle = !this.toggle;
  this.status = this.toggle ? "Enable" : "Disable";
  }
}
