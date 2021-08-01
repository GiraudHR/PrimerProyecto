import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {
 imgSrc = "https://agenciacomma.com/wp-content/uploads/2021/04/busqueda-inversa-imagenes.jpg";
 imgWidth = "500";
  constructor() { }

  ngOnInit(): void {
  }

  imgGrande(){
    this.imgWidth = "500";
  }

  imgChica(){
    this.imgWidth = "200";
  }

}
