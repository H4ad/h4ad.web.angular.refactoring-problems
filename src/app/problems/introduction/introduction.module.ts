import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IntroductionComponent } from './introduction.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: IntroductionComponent },
    ]),
  ],
  exports: [
    IntroductionComponent,
  ],
  declarations: [
    IntroductionComponent,
  ],
})
export class IntroductionModule {}
