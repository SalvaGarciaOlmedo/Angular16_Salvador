import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h1>Componente CounterComponent</h1>
  <h2>Nuestra app se llama {{title}}</h2>
  
  <h3>Counter {{counter}}</h3>
  
  <input type="button"value = "+1" (click)="incrementar()">
  <input type="button"value = "Reset" (click)="reset()">
  <input type="button"value = "-1" (click)="decrementar()">
  `,
  styles: ``
})
export class CounterComponent {
  title:string = 'Counter';
  counter:number  = 10;

  incrementar(){
    this.counter=this.counter+1;
  }
  decrementar(){
    this.counter--;
  }
  reset(){
    this.counter = 10;
  }
}
