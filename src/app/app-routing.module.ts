import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TssComponent } from './tss/tss.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tss', component: TssComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
