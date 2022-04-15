import { Component, Input, OnInit } from '@angular/core';
import { QCondition } from 'model/tss/q-condition';
import { QRecord } from 'model/tss/q-record';

@Component({
  selector: 'by-save-input',
  templateUrl: './save-input.component.html',
  styleUrls: ['./save-input.component.scss']
})
export class SaveInputComponent implements OnInit {

  @Input() cond: QCondition;
  @Input() state: number;
  value: string;

  constructor() {
    this.value = "初期値";
  }

  ngOnInit() {
  }

  save() {
    // const qr: QRecord = {
    //   no: 0;
    //   name: string;
    //   date: string;
    //   state: number;
    //   cond: QCondition;
    // };
  }
}