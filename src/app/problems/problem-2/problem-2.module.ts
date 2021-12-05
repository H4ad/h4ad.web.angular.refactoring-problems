import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Problem2Component } from './problem-2.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: Problem2Component },
    ]),
  ],
  exports: [
    Problem2Component,
  ],
  declarations: [
    Problem2Component,
  ],
})
export class Problem2Module {}
