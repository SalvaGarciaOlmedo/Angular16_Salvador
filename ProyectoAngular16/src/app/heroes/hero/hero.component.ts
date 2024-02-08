import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  private _nombre: string = "ironman";
  public get nombre(): string {
    return this._nombre;
  }
  public set nombre(value: string) {
    this._nombre = value;
  }

   dameDescripcion():string{
    return `${this._nombre} - ${this.edad}`
  }

  edad:number=45;
  
  public get nombreMayusculas():string{
    return this._nombre.toUpperCase()
  }

  CambiarNombre(){
    this._nombre="El increible Hulk";
  }
  CambiarEdad(){
    this.edad = 25;
  }
  Reset(){
    this._nombre="Lucia"
    this.edad=21;
    return `${this._nombre} - ${this.edad}` 
  }


}
