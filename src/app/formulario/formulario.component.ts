import { Component, OnInit } from '@angular/core';
import { Pais } from '../models/pais';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  persona: Persona;
  paises: Pais[];
  constructor() {
    this.persona = new Persona();
    this.paises = [
      {id: 1, nombre: 'Mexico'},
      {id: 2, nombre: 'EU'},
      {id: 3, nombre: 'Colombia'},
      {id: 4, nombre: 'Peru'},
    ]
   }

  ngOnInit(): void {
  }

  guardar(formData: any){
    console.log(formData)
  }

}
