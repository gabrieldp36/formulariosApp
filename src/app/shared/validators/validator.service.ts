import { Injectable } from '@angular/core';

import { AbstractControl, FormControl, FormGroup, NgForm, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public nombreApellidoPatron: RegExp = /^(?:[\u00c0-\u01ffa-zA-Z'-]){2,}(?:\s[\u00c0-\u01ffa-zA-Z'-]{2,})+$/i;

  public emailPatron: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  public passwordPatron: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  validarCampos(miFormulario: FormGroup, campo: string, error: string): boolean {

    return (miFormulario.get(campo)?.errors?.[error] 
        && miFormulario.get(campo)?.touched )
          ?  true : false;
  };

  validarCamposTemple(miFormulario: NgForm, campo: string, error: string): boolean {

    return (miFormulario?.controls[campo]?.invalid
        && miFormulario?.controls[campo]?.touched)
          ?  true : false;
  };

  noShijonage(control: FormControl): ValidationErrors | null {

    const valor: string = control.value?.trim().toLowerCase();

    if(valor === 'shijonage') {

      return {

        noShijonage: true
      }
    };

    return null
  };

  camposIguales(campo1: string, campo2: string) {

    return (miFormulario: AbstractControl): ValidationErrors | null => {

      const pass1: string = miFormulario.get(campo1)?.value;

      const pass2: string = miFormulario.get(campo2)?.value;

      if (pass1 !== pass2) {

        miFormulario.get(campo2)?.setErrors( {noIguales: true} );

        return {noIguales: true};
      }

      miFormulario.get(campo2)?.setErrors( null );

      return null
    };
  };
};
