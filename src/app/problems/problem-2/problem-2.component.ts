import { Component } from '@angular/core';

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
        <button (click)="changeFoodTo('none')">Trocar para: nenhuma</button>
      </li>
      <li>
        <button (click)="changeFoodTo('batata')">Trocar para: batata</button>
      </li>
      <li>
        <button (click)="changeFoodTo('frango')">Trocar para: frango</button>
      </li>
    </ul>
  `,
})
export class Problem2Component {
  public selectedFood: string = 'none';

  public changeFoodTo(food: string): void {
    this.selectedFood = food;
  }
}
