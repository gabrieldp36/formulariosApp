import { Component } from '@angular/core';

export interface MenuItem {

  nombre: string;
  ruta: string
};

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [

    `
      li {

        cursor: pointer;
      }
    `
  ],
})
export class SideMenuComponent {

  public templateMenu: MenuItem[] = [

    {
      nombre:'Básicos',
      ruta: './template/basicos'
    },
    {
      nombre:'Dinámicos',
      ruta: './template/dinamicos'
    },
    {
      nombre:'Switches',
      ruta: './template/switches'
    },
  ];


  
  public reactiveMenu: MenuItem[] = [

    {
      nombre:'Básicos',
      ruta: './reactive/basicos'
    },
    {
      nombre:'Dinámicos',
      ruta: './reactive/dinamicos'
    },
    {
      nombre:'Switches',
      ruta: './reactive/switches'
    },
  ];

  public authMenu: MenuItem[] = [

    {
      nombre: 'Registro',
      ruta: './auth/registro'
    },
  ];
};