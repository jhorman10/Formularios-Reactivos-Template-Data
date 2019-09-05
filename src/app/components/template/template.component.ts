import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  usuario: object = {
    nombre: null,
    apellido: null,
    email: null,
    pais: 'CO',
    sexo: 'Hombre'
  };

  paises = [
    {
      codigo: 'CO',
      nombre: 'Colombia'
    },
    {
      codigo: 'CRI',
      nombre: 'Costa Rica'
    },
    {
      codigo: 'PR',
      nombre: 'Puerto Rico'
    }
  ];

  constructor() { }

  guardar(forma: NgForm) {
    console.log('formulario posteado');
    console.log(forma);
    console.log('valor', forma.value);
  }

}
