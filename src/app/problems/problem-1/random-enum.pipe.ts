import { Pipe, PipeTransform } from '@angular/core';
import { RandomEnum } from './random.enum';

@Pipe({
  name: 'randomEnum',
})
export class RandomEnumPipe implements PipeTransform {
  public transform(value: RandomEnum): string {
    switch (value) {
      case RandomEnum.FIRST_RANDOM:
        return 'Primeiro Valor Randômico.';

      case RandomEnum.SECOND_RANDOM:
        return 'Segundo Valor Randômico.';

      default:
        return 'Desconhecido.';
    }
  }
}
