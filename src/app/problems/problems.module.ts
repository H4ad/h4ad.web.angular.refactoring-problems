import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProblemsComponent } from './problems.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: ProblemsComponent },
    ]),
  ],
  exports: [
    ProblemsComponent,
  ],
  declarations: [
    ProblemsComponent,
  ],
})
export class ProblemsModule {}
