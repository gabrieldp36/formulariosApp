import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidatorService } from '../../../shared/validators/validator.service';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  // public miFormulario: FormGroup = new FormGroup({

  //   nombre: new FormControl('RTX 4800 ti'),
  //   precio: new FormControl(1500),
  //   stock: new FormControl(5),
  // });

  public miFormulario: FormGroup = this.formBuilder.group({

    nombre: ['', [Validators.required, Validators.minLength(3)] ],

    precio: [0, [Validators.required, Validators.min(0)] ],

    stock: [0, [Validators.required, Validators.min(0)] ],
  });

  constructor(
    
    private formBuilder: FormBuilder,

    public validatorService: ValidatorService,
    
  ) {};

  guardar(): void {

    if(this.miFormulario.invalid) {

      this.miFormulario.markAllAsTouched();

      return;
    };

    this.miFormulario.reset({

      nombre: '',
      precio: 0,
      stock: 0
    });
  };
};
