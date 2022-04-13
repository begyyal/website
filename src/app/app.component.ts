import { Component } from '@angular/core';
import { SessionManager } from 'service/session-manager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public sm: SessionManager) {}
}
