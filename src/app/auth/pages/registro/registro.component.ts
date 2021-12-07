import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidatorService } from '../../../shared/validators/validator.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent {

  public miFormulario: FormGroup = this.formBuilder.group({

    nombre: ['', [ Validators.required, Validators.pattern(this.validatorService.nombreApellidoPatron) ] ],

    email: ['', [ Validators.required, Validators.pattern(this.validatorService.emailPatron) ], [this.emailValidator] ],

    username: ['', [Validators.required, this.validatorService.noShijonage] ],

    password: ['', [Validators.required, Validators.pattern(this.validatorService.passwordPatron) ] ],

    password2: ['', [Validators.required] ],

  }, {

    validators: [ this.validatorService.camposIguales('password', 'password2') ],
  });

  constructor(
    
    private formBuilder: FormBuilder,

    public validatorService: ValidatorService,

    private emailValidator: EmailValidatorService,

  ) {};

  crearUsuario (): void {

    if (this.miFormulario.invalid) {

      this.miFormulario.markAllAsTouched();

      return
    };
    
    this.miFormulario.reset({

      nombre: '',
      email: '',
      username: '',
    })

    console.log('Formulario posteado');
  };
};
