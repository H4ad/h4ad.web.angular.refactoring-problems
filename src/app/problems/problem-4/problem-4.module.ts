import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Problem4Component } from './problem-4.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: Problem4Component },
    ]),
  ],
  exports: [
    Problem4Component,
  ],
  declarations: [
    Problem4Component,
  ],
})
export class Problem4Module {}
