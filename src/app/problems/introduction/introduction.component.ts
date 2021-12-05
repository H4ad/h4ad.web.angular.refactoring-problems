import { Component } from '@angular/core';

@Component({
  selector: 'rp-problems',
  template: `
    <h1>Lista de Problemas para solucionar</h1>
    <ul>
      <li>
        <a routerLink="/problems/1">Problema 1: Usando Pipes</a>
      </li>
      <li>
        <a routerLink="/problems/2">Problema 2: Usando Enums no HTML</a>
      </li>
    </ul>
  `,
})
export class IntroductionComponent {}
