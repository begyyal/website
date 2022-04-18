import { NgModule } from '@angular/core';

import { BanComponent } from './ban/ban.component';
import { MtgmComponent } from './mtgm/mtgm.component';
import { PaletteComponent } from './palette/palette.component';
import { ResultDisplayComponent } from './result-display/result-display.component';
import { SaveInputComponent } from './save-input/save-input.component';
import { SaveHistoryComponent } from './save-history/save-history.component';
import { TssComponent } from './tss.component';

import { TssRoutingModule } from './tss-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from "@angular/common";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select'
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ByDialogModule } from 'app/common/dialog/dialog.module';

@NgModule({
  declarations: [
    TssComponent,
    BanComponent,
    MtgmComponent,
    PaletteComponent,
    ResultDisplayComponent,
    SaveInputComponent,
    SaveHistoryComponent
  ],
  imports: [
    TssRoutingModule,
    MatGridListModule,
    CommonModule,
    DragDropModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    BrowserAnimationsModule,
    ByDialogModule
  ],
  providers: []
})
export class TssModule { }
