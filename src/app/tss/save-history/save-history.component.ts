import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { QRecord, isQRecord } from 'model/tss/q-record';
import { LsKey } from 'constant/tss/ls-key';
import { SelectionModel } from '@angular/cdk/collections';
import { XUtils } from 'service/x-utils';
import { MatDialog } from '@angular/material/dialog';
import { ByDialog } from 'app/common/dialog/dialog.component';
import { DIALOG_DATA } from 'constant/tss/config';

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
  exFileName: string;

  constructor(private utils: XUtils, public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  import(event: any) {
    const file: File = event.target.files[0];
    file.text().then(t => {
      const obj = JSON.parse(t);
      const temp = this.checkAndCast(obj);
      if (temp == null)
        this.dialog.open(ByDialog, { data: DIALOG_DATA.import });
      else
        this.records = temp;
    });
  }

  checkAndCast(obj: any): QRecord[] {
    return (obj instanceof Array && obj.every(isQRecord)) ? obj : null;
  }

  resrore() {
    this.emRestore.emit(this.selection.selected[0]);
  }

  download() {
    const a = document.createElement('a');
    const blob = new Blob([JSON.stringify(this.records)], { type: 'application/json' });
    a.href = window.URL.createObjectURL(blob);
    a.download = "tss_records_" + this.utils.getNowAsDateString() + ".json";
    a.click();
  }

  delete() {
    this.records = this.records.filter(r => this.selection.selected.every(s => r.id != s.id))
    localStorage.setItem(LsKey.Records, JSON.stringify(this.records));
    this.selection.clear();
  }

  allDelete() {
    const ref = this.dialog.open(ByDialog, { data: DIALOG_DATA.allDelete });
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.records = [];
        this.recordsChange.emit(this.records);
        localStorage.removeItem(LsKey.Records);
        this.selection.clear();
      }
    });
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