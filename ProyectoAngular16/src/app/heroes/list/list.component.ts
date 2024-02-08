import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  heroNames:string[]=['Antonio', 'Amador', 'Enrique', 'Fermin']

  public heroeBorradoMostrar?:string='';
  eliminarPersonaje(): void{
    let heroeDelete = String(this.heroNames.pop());
    
  }

}
