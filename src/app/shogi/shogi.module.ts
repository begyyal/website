import { NgModule } from '@angular/core';

import { BanComponent } from './ban/ban.component';
import { ShogiComponent } from './shogi.component';
import { ShogiRoutingModule } from './shogi-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from "@angular/common";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ShogiComponent,
    BanComponent
  ],
  imports: [
    ShogiRoutingModule,
    MatGridListModule,
    CommonModule,
    DragDropModule,
    BrowserAnimationsModule
  ],
  providers: []
})
export class ShogiModule { }
