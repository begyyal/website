import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ShogiComponent } from './shogi.component';

const routes = [
  { path: 'shogi', component: ShogiComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ShogiRoutingModule {}
