import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidatorService } from '../../../shared/validators/validator.service';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  public miFormulario: FormGroup = this.formBuilder.group({

    genero: ['', Validators.required],

    notificaciones: [true, Validators.required],

    condiciones: [false, Validators.requiredTrue],
  });

  public persona = {

    genero: 'femenino',
    notificaciones: false
  };

  constructor(
    
    private formBuilder: FormBuilder,

    public validatorService: ValidatorService,
    
  ) {};

  ngOnInit(): void {
    
    this.miFormulario.reset({

      ...this.persona,
      condiciones: false,
    });

    // this.miFormulario.get('condiciones')?.valueChanges.subscribe( newValue => console.log);

    this.miFormulario.valueChanges.subscribe( ( {condiciones, ...restArg} ) => {

      this.persona = restArg;
    });
  };

  guardar(): void {

    if(this.miFormulario.invalid) {

      this.miFormulario.markAllAsTouched();

      return;
    };

    const formValue = {...this.miFormulario.value};

    delete formValue.condiciones;

    this.persona = formValue;

    this.miFormulario.reset({

      genero:'femenino',
      notificaciones: false,
      condiciones: false,
    });
  };
};
