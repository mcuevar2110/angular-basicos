import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {
  
  heroes:string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeBorrado:string = '';

  borrarHeroe():void{
    //const heroeBorrado = this.heroes.pop();
    this.heroeBorrado = this.heroes.pop() || '';
    //console.log(heroeBorrado);
  }
}
