import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'by-ban',
  templateUrl: './ban.component.html',
  styleUrls: ['./ban.component.scss']
})
export class BanComponent implements OnInit {

  matrix: number[] = [...Array(81)].map((_, i) => i);

  constructor() {
  }

  ngOnInit(): void {
  }
}
