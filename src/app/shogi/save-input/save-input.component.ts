import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { selectById, Player } from 'constant/shogi/player';
import { Motigoma } from 'model/shogi/motigoma';

@Component({
  selector: 'by-save-input',
  templateUrl: './save-input.component.html',
  styleUrls: ['./save-input.component.scss']
})
export class SaveInputComponent implements OnInit {

  value: string;

  constructor() {
    this.value = "初期値";
  }

  ngOnInit() {
  }

  save() {
  }
}