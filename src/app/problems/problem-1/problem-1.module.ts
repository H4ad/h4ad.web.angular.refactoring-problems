import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Problem1Component } from './problem-1.component';
import { RandomEnumPipe } from './random-enum.pipe';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: Problem1Component },
    ]),
  ],
  exports: [
    Problem1Component,
  ],
  declarations: [
    Problem1Component,
    RandomEnumPipe,
  ],
  providers: [
    RandomEnumPipe,
  ],
})
export class Problem1Module {}
