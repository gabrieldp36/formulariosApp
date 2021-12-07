import { Component } from '@angular/core';

import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ValidatorService } from '../../../shared/validators/validator.service';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  public miFormulario: FormGroup = this.formBuilder.group({

    nombre: ['', [Validators.required, Validators.minLength(3)] ],
    favoritos: this.formBuilder.array( 
      [ 
        ['Metal Gear', Validators.required ],
      
        ['The Last of Us', Validators.required ],
      ],

      Validators.required,
    )
  });

  public nuevoFavorito: FormControl = this.formBuilder.control('', Validators.required);

  constructor(
    
    private formBuilder: FormBuilder,

    public validatorService: ValidatorService,
    
  ) {};

  get favoritosArr(): FormArray {

    return this.miFormulario.get('favoritos') as FormArray;
  };

  validarAgregar(): boolean {

    return (this.favoritosArr.length === 0 && this.nuevoFavorito.touched)
              ? true : false;
  };

  agregarJuego():void {

    if( this.nuevoFavorito.invalid ) { return; };

    this.favoritosArr.push(this.formBuilder.control( this.nuevoFavorito.value, Validators.required ) );

    this.nuevoFavorito.reset();
  };

  eliminar( index: number ):void {

    this.favoritosArr.removeAt(index);
  };

  guardar():void {
    
    if(this.miFormulario.invalid) {

      this.miFormulario.markAllAsTouched();

      this.nuevoFavorito.markAsTouched();

      return;
    };

    this.miFormulario.reset({

      nombre: '',
    });

    this.favoritosArr.clear();

    this.nuevoFavorito.reset();

    console.log('Formulario posteado');
  };
};

