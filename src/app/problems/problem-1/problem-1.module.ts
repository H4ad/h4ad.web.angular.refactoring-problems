import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Problem1Component } from './problem-1.component';

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
  ],
})
export class Problem1Module {}
