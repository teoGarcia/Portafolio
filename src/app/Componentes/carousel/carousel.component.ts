import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  VectorImagenes: any[] = [
  {
    nombre: "Menu Principal",
    img: "../assets/Imagenes/SpaVecGeneratorMenu2.png",
    desc: ""
  },
  {
    nombre: "Vista 3D",
    img: "../assets/Imagenes/SpaVecGeneratorVista3D.png",
    desc: ""
  },
  {
    nombre: "Puntos y segmentos",
    img: "../assets/Imagenes/SpaVecGeneratorFigura.png",
    desc: ""
  }


  ];

  VectorImagenesBenso: any[] = [
    {
      nombre: "Menu Principal",
      img: "../assets/Imagenes/BensoSPAMenu.png",
      desc: ""
    },
    {
      nombre: "Cotizacion",
      img: "../assets/Imagenes/BensoSPACotizacion.png",
      desc: ""
    },
    {
      nombre: "Orden de Compra",
      img: "../assets/Imagenes/BensoSPAOC.png",
      desc: ""
    }
  
  
    ];


  constructor(private _config:NgbCarouselConfig) { }

  ngOnInit(): void {
  }

}
