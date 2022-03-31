import { NgModule } from '@angular/core';

import { BanComponent } from './ban/ban.component';
import { MtgmComponent } from './mtgm/mtgm.component';
import { PaletteComponent } from './palette/palette.component';
import { ResultDisplayComponent } from './result-display/result-display.component';
import { ShogiComponent } from './shogi.component';

import { ShogiRoutingModule } from './shogi-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from "@angular/common";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatSelectModule } from '@angular/material/select'
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ShogiComponent,
    BanComponent,
    MtgmComponent,
    PaletteComponent,
    ResultDisplayComponent
  ],
  imports: [
    ShogiRoutingModule,
    MatGridListModule,
    CommonModule,
    DragDropModule,
    MatSelectModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: []
})
export class ShogiModule { }
