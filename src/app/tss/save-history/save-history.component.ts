import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { QRecord } from 'model/tss/q-record';
import { XUtils } from 'service/x-utils';
import { LsKey } from 'constant/tss/ls-key';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'by-save-history',
  templateUrl: './save-history.component.html',
  styleUrls: ['./save-history.component.scss']
})
export class SaveHistoryComponent implements OnInit {

  displayedColumns: string[] = ['no', 'name', 'date', 'state'];
  @Input() records: QRecord[];
  @Output() recordsChange = new EventEmitter<QRecord[]>();

  constructor(private utils: XUtils) {
  }

  ngOnInit() {
  }

  import(override: boolean) {

  }

  download() {

  }

  allDelete() {
    this.records = [];
    this.recordsChange.emit(this.records);
    localStorage.removeItem(LsKey.Records);
  }
}