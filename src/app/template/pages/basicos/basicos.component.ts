import { Component, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';

import { ValidatorService } from '../../../shared/validators/validator.service';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  @ViewChild('miFormulario') miFormulario!:NgForm;

  constructor(public validatorService: ValidatorService) {};

  stockValido(): boolean {

    return this.miFormulario?.controls['stock']?.invalid
              && this.miFormulario?.controls['stock']?.touched;
  };

  guardar(): void {

    this.miFormulario.resetForm({

      producto: '',
      precio: '',
      stock: '',
    });
  };
};
