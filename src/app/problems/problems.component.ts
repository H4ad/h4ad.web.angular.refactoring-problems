import { Component } from '@angular/core';

@Component({
  selector: 'rp-problems',
  template: `
    <h1>Lista de Problemas para solucionar</h1>
    <ul>
      <li>
        <a routerLink="/problems/1">Problema 1: Usando Pipes</a>
      </li>
    </ul>
  `,
})
export class ProblemsComponent {}
