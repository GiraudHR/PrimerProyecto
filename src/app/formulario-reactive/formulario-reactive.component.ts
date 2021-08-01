import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactive',
  templateUrl: './formulario-reactive.component.html',
  styleUrls: ['./formulario-reactive.component.css']
})
export class FormularioReactiveComponent implements OnInit {

  nombre = new FormControl();
  constructor() { }

  ngOnInit(): void {
  }

  agregar(){
    this.nombre.setValue('Gerardo Hernandez');
  }
  mostrar(){
    console.log(this.nombre.value);
  }

}
