import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TssComponent } from './tss.component';

const routes = [
  { path: 'tss', component: TssComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class TssRoutingModule {}
