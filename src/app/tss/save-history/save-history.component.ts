import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { QRecord } from 'model/tss/q-record';
import { XUtils } from 'service/x-utils';




@Component({
  selector: 'by-save-history',
  templateUrl: './save-history.component.html',
  styleUrls: ['./save-history.component.scss']
})
export class SaveHistoryComponent implements OnInit {

  displayedColumns: string[] = ['no', 'name', 'date', 'state'];
  dataSource: QRecord[] = [
    { no: 1, name: '1手詰み_1', date: this.utils.getNowAsDateString(), state: 0, cond: null },
    { no: 2, name: '1手詰み_2', date: this.utils.getNowAsDateString(), state: 1, cond: null },
    { no: 3, name: '3手詰み_1', date: this.utils.getNowAsDateString(), state: 2, cond: null },
  ];

  constructor(private utils: XUtils) {
  }

  ngOnInit() {
  }

  import(override: boolean) {

  }

  download() {

  }

  allDelete() {

  }
}