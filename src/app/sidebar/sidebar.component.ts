import { Component, OnInit, ViewChild } from '@angular/core';
import { BYType } from 'constant/by-type';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ICON_GITHUB, ICON_TWITTER } from 'constant/icon-svg';

@Component({
  selector: 'by-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  types = [BYType.HOME, BYType.TSS];
  full: boolean;
  footerStyle: string;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.update();
    iconRegistry.addSvgIconLiteral('github', sanitizer.bypassSecurityTrustHtml(ICON_GITHUB));
    iconRegistry.addSvgIconLiteral('twitter', sanitizer.bypassSecurityTrustHtml(ICON_TWITTER));
  }

  ngOnInit(): void {
  }

  onResize(event: any) {
    this.update();
  }

  update() {
    this.full = window.innerWidth > 800;
    if (this.full)
      this.footerStyle = "display:flex";
    else
      this.footerStyle = "";
  }
}
