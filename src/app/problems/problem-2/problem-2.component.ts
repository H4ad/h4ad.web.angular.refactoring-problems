import { Component } from '@angular/core';
import { Problem2Enum } from './problem-2.enum';

@Component({
  selector: 'rp-problem-two',
  template: `
    <h1>Como usar enums no HTML</h1>
    <p>O objetivo desse problema é mostrar como você pode referenciar enums dentro do HTML, troque os valores estáticos de "batata" e "frango" no código pelo enum <code>Problem2Enum</code>.</p>
    <p>No final da refatoração, você deve transformar os valores abaixo em um enum e referenciar eles aqui no HTML para que, durante uma refatoração, você não quebre seu código por esquecer de trocar o valor do enum.</p>
    <hr>
    <label>Você selecionou a comida: {{ selectedFood }}</label>
    <ul>
      <li>
        <button (click)="changeFoodTo(foodType.NONE)">Trocar para: nenhuma</button>
      </li>
      <li>
        <button (click)="changeFoodTo(foodType.POTATO)">Trocar para: batata</button>
      </li>
      <li>
        <button (click)="changeFoodTo(foodType.CHICKEN)">Trocar para: frango</button>
      </li>
    </ul>
  `,
})
export class Problem2Component {
  public foodType: typeof Problem2Enum = Problem2Enum;
  public selectedFood: Problem2Enum = Problem2Enum.NONE;

  public changeFoodTo(food: Problem2Enum): void {
    this.selectedFood = food;
  }
}
