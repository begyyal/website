import { NgModule } from '@angular/core';

import { BanComponent } from './ban/ban.component';
import { MtgmComponent } from './mtgm/mtgm.component';
import { PaletteComponent } from './palette/palette.component';
import { ResultDisplayComponent } from './result-display/result-display.component';
import { SaveInputComponent } from './save-input/save-input.component';
import { SaveHistoryComponent } from './save-history/save-history.component';
import { ShogiComponent } from './shogi.component';

import { ShogiRoutingModule } from './shogi-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from "@angular/common";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select'
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ShogiComponent,
    BanComponent,
    MtgmComponent,
    PaletteComponent,
    ResultDisplayComponent,
    SaveInputComponent,
    SaveHistoryComponent
  ],
  imports: [
    ShogiRoutingModule,
    MatGridListModule,
    CommonModule,
    DragDropModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: []
})
export class ShogiModule { }
