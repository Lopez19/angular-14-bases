import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Goku', 'Vegeta', 'MaginBoo', 'Piccolo'];

  heroeB: string = '';

  borrarHeroe(): void {
    this.heroeB = this.heroes.pop() || '';
  }
}
