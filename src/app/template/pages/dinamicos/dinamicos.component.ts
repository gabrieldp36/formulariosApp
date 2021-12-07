import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';
import { ValidatorService } from '../../../shared/validators/validator.service';

interface Persona {

  nombre: string;
  favoritos: Favoritos[];
};

interface Favoritos {

  id: number;
  nombre: string;
};

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  public nuevoJuego: string = '';
  
  public persona: Persona = {

    nombre: 'Paula',

    favoritos: [

      {id: 1, nombre: 'Crash Bandicoot'},

      {id: 2, nombre: 'Sims'},
    ]
  };

  constructor(public validatorService: ValidatorService) {};

  agregarJuego(): void {

    const nuevoFavorito: Favoritos = {

      id: this.persona.favoritos.length + 1,

      nombre: this.nuevoJuego,

    };

    this.persona.favoritos.push( {...nuevoFavorito} );

    this.nuevoJuego = '';
  };

  eliminar(index: number): void {

    this.persona.favoritos.splice(index, 1);
  };

  guardar(miFormulario: NgForm): void {

    console.log('Formulario posteado');

    miFormulario.reset({

      nombre: '',
      nuevoJuego: '',
    });

    this.persona.favoritos = [];
  };
};
