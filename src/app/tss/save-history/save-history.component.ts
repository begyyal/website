import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { QRecord } from 'model/tss/q-record';
import { LsKey } from 'constant/tss/ls-key';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'by-save-history',
  templateUrl: './save-history.component.html',
  styleUrls: ['./save-history.component.scss']
})
export class SaveHistoryComponent implements OnInit {

  displayedColumns: string[] = ['select', 'id', 'name', 'nom', 'date', 'state'];
  @Input() records: QRecord[];
  @Output() recordsChange = new EventEmitter<QRecord[]>();
  @Output() emRestore = new EventEmitter<QRecord>();
  selection = new SelectionModel<QRecord>(true, []);
  avRestore: boolean;
  avDelete: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  import(override: boolean) {

  }

  resrore() {
    this.emRestore.emit(this.selection.selected[0]);
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

  toggle(rec: QRecord) {
    this.selection.toggle(rec);
    this.avRestore = this.selection.selected.length == 1;
    this.avDelete = this.selection.selected.length >= 1;
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      this.avRestore = this.avDelete = false;
    } else {
      this.selection.select(...this.records);
      this.avRestore = this.records.length == 1;
      this.avDelete = this.selection.selected.length >= 1;
    }
  }
}