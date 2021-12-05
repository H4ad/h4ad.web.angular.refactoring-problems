import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Problem3Component } from './problem-3.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: Problem3Component },
    ]),
  ],
  exports: [
    Problem3Component,
  ],
  declarations: [
    Problem3Component,
  ],
})
export class Problem3Module {}
