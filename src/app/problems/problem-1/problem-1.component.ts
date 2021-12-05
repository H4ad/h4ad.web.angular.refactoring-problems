import { Component } from '@angular/core';
import { RandomEnum } from './random.enum';

@Component({
  selector: 'rp-problem-one-component-one',
  template: `
    <h1>Aprendendo sobre Pipes</h1>
    <p>O objetivo desse problema é você aprender a usar e criar <a href="https://angular.io/guide/pipes">PIPES</a>, especialmente para exibir valores de enums.</p>
    <p>No final da refatoração, você deve usar um pipe customizado para exibir um belo nome para cada valor do enum.</p>
    <ul>
      <li>{{ randomEnumToString(randomEnumType.FIRST_RANDOM) }}</li>
      <li>{{ randomEnumToString(randomEnumType.SECOND_RANDOM) }}</li>
    </ul>
  `,
})
export class Problem1Component {
  public randomEnumType: typeof RandomEnum = RandomEnum;

  public randomEnumToString(randomEnum: RandomEnum): string {
    switch (randomEnum) {
      case RandomEnum.FIRST_RANDOM:
        return 'Primeiro Valor Randômico.';

      case RandomEnum.SECOND_RANDOM:
        return 'Segundo Valor Randômico.';

      default:
        return 'Desconhecido.';
    }
  }
}
