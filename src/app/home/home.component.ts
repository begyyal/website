import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'by-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  escapedMail = "begyyal*gmail.com";
  sbConf = { duration: 3000 };
  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  copyMail() {
    navigator.clipboard.writeText(this.escapedMail.replace("*", "@"))
      .then(() => {
        this._snackBar.open("Mail address copied.", null, this.sbConf);
      })
      .catch(() => {
        this._snackBar.open("Failed to copy.", null, this.sbConf);
      });
  }
}
