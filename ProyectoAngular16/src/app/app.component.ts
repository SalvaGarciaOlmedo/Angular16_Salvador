import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'Bases';
  counter:number  = 10;

  incrementar(){
    this.counter++;
  }
  decrementar(){
    this.counter--;
  }
  reset(){
    this.counter = 10;
  }
}
