import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import EventEmitter = NodeJS.EventEmitter;
import {Output} from "@angular/compiler/src/core";
import {EmployeeService} from "../employee.service";


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = 'Jaskaran';
  public textBoxValue = 'Jaskaran';
  public textBoxDisabled = false;
  public successClass = 'green';
  public showTheLabel = false;
  public color = "red";
  public colors = ['red', 'green', 'blue', 'yellow'];

  @Input() public dataFromParent;
  @Output() public childEvent = new EventEmitter();

  constructor(private _employeeService: EmployeeService ) { }

  ngOnInit() {
    this._employeeService.getEmployees()
        .subscribe(data => {
          console.log("Employees ", data);
        })
  }

  onClick(event) {
    console.log(event);
    alert("Welcome to Angular");
  }

  logInput(value) {
    console.log(value);
  }

  fireEvent() {
    this.childEvent.emit("Data from child to Parent.");
  }

}
