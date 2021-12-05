import { Component } from '@angular/core';
import { RandomEnum } from './random.enum';

@Component({
  selector: 'rp-problem-one-component-one',
  template: `
    <h1>Aprendendo sobre Pipes</h1>
    <p>O objetivo desse problema é você aprender a usar e criar <a href="https://angular.io/guide/pipes">PIPES</a>, especialmente para exibir valores de enums.</p>
    <p>No final da refatoração, você deve usar um pipe customizado para exibir um belo nome para cada valor do enum.</p>
    <hr>
    <ul>
      <li>{{ randomEnumType.FIRST_RANDOM | randomEnum }}</li>
      <li>{{ randomEnumType.SECOND_RANDOM | randomEnum }}</li>
    </ul>
  `,
})
export class Problem1Component {
  public randomEnumType: typeof RandomEnum = RandomEnum;
}
