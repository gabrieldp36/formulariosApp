import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent {

  public persona = {

    genero: '',
    notificaciones: true,
  };

  public terminosCondiciones: boolean = false;

  guardar(miFormulario: NgForm):void {

    miFormulario.reset({

      genero:'femenino',
      notificaciones: false,
      terminos: false,
    });
  };
};
