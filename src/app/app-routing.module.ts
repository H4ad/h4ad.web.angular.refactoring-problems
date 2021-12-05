import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'introduction', pathMatch: 'full' },
  { path: 'introduction', loadChildren: () => import('./problems/introduction/introduction.module').then(m => m.IntroductionModule) },
  { path: 'problems/1', loadChildren: () => import('./problems/problem-1/problem-1.module').then(m => m.Problem1Module) },
  { path: 'problems/2', loadChildren: () => import('./problems/problem-2/problem-2.module').then(m => m.Problem2Module) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
