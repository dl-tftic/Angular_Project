import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'TreeButtonAdd',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.scss']
})
export class ButtonAddComponent implements OnInit
{

  @Input() iconName: string;

  constructor() { }

  ngOnInit(): void {

  }


}
