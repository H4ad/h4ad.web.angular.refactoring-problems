import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'rp-problem-four',
  template: `
    <h1>Problema sobre ViewChild e LifeCycle Methods</h1>
    <p>O objetivo desse problema é te mostrar um pouco mais sobre como funciona o <a href>ViewChild</a> e qual é o principal problema que você pode ter usando ele no dia a dia.</p>
    <p>No final da refatoração, você deve consertar o erro que está acontecendo e que está sendo exibido no console.</p>
    <hr>
    <p>O henrique é um <span #textToChange>batata</span>.</p>
    <p>O texto acima era para ser: O henrique é um desenvolvedor de apps e api.</p>
  `,
})
export class Problem4Component implements AfterViewInit {
  @ViewChild('textToChange')
  public textToChange!: ElementRef<HTMLSpanElement>;

  public async ngAfterViewInit(): Promise<void> {
    this.textToChange.nativeElement.innerText = 'desenvolvedor de apps e api';
  }
}
