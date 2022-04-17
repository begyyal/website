import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { QRecord } from 'model/tss/q-record';
import { XUtils } from 'service/x-utils';
import { LsKey } from 'constant/tss/ls-key';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'by-save-history',
  templateUrl: './save-history.component.html',
  styleUrls: ['./save-history.component.scss']
})
export class SaveHistoryComponent implements OnInit {

  displayedColumns: string[] = ['select', 'id', 'name', 'date', 'state'];
  @Input() records: QRecord[];
  @Output() recordsChange = new EventEmitter<QRecord[]>();
  selection = new SelectionModel<QRecord>(true, []);

  constructor(private utils: XUtils) {
  }

  ngOnInit() {
  }

  import(override: boolean) {

  }

  download() {

  }

  delete() {
    this.records = this.records.filter(r => this.selection.selected.every(s => r.id != s.id))
    localStorage.setItem(LsKey.Records, JSON.stringify(this.records));
    this.selection.clear();
  }

  allDelete() {
    this.records = [];
    this.recordsChange.emit(this.records);
    localStorage.removeItem(LsKey.Records);
    this.selection.clear();
  }

  isAllSelected() {
    return this.selection.selected.length === this.records.length;
  }

  masterToggle() {
    if (this.isAllSelected())
      this.selection.clear();
    else
      this.selection.select(...this.records);
  }
}