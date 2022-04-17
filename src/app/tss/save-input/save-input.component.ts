import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { QCondition } from 'model/tss/q-condition';
import { QRecord } from 'model/tss/q-record';
import { XUtils } from 'service/x-utils';
import { LsKey } from 'constant/tss/ls-key';

@Component({
  selector: 'by-save-input',
  templateUrl: './save-input.component.html',
  styleUrls: ['./save-input.component.scss']
})
export class SaveInputComponent implements OnInit {

  @Input() records: QRecord[];
  @Output() recordsChange = new EventEmitter<QRecord[]>();
  @Input() cond: QCondition;
  @Input() state: number;
  value: string;

  constructor(private utils: XUtils) {
    this.value = "初期値";
  }

  ngOnInit() {
  }

  save() {
    const update = this.records.find(r => r.name == this.value);
    this.records = this.records.filter(r => r.name != this.value);
    const qr: QRecord = {
      id: update ? update.id : this.saiban(),
      name: this.value,
      date: this.utils.getNowAsDateString(),
      state: this.state,
      cond: this.cond
    };
    this.records.push(qr);
    this.recordsChange.emit(this.records);
    localStorage.setItem(LsKey.Records, JSON.stringify(this.records));
  }

  saiban() {
    for (let i = 1; i <= this.records.length; i++)
      if (this.records.every(r => r.id != i))
        return i;
    return this.records.length + 1;
  }
}