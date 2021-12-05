import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'problems', pathMatch: 'full' },
  { path: 'problems', loadChildren: () => import('./problems/problems.module').then(m => m.ProblemsModule) },
  { path: 'problems/1', loadChildren: () => import('./problems/problem-1/problem-1.module').then(m => m.Problem1Module) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
