import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'rp-problem-three',
  template: `
    <h1>Problema sobre como obter elementos do HTML</h1>
    <p>O objetivo desse problema é te mostrar um pouco de como você pode pegar os elementos do HTML usando o <a href>ViewChild</a> em vez de usar funções do Javascript como <code>document.getElementById</code></p>
    <p>No final da refatoração, você deve remover todas as referências de funções do Javascript puro e substituir pelas alternativas do Angular.</p>
    <hr>
    <label>Você selecionou a comida: <span #textToChange>none</span></label>
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
export class Problem3Component {
  @ViewChild('textToChange')
  public textToChange?: ElementRef<HTMLSpanElement>;

  public changeFoodTo(food: string): void {
    if (!this.textToChange?.nativeElement)
      return;

    this.textToChange.nativeElement.innerText = food;
  }
}
