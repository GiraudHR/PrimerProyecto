import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  paises = ['Mexico','España','EU'];
  constructor() { }

  ngOnInit(): void {
  }

  agregarPaid(nombrepais: string){
    if(!nombrepais){
      alert('Ingrese el pais');
      return;
    }
    this.paises.push(nombrepais);
  }

}
