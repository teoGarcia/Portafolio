import { Component, OnInit } from '@angular/core';

interface Image {
  nombre: string;
  img: string;
  desc: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  
  VectorImagenes: Image[] = [
    {
      nombre: 'Menu Principal',
      img: '../assets/Imagenes/SpaVecGeneratorMenu2.png',
      desc: '',
    },
    {
      nombre: 'Vista 3D',
      img: '../assets/Imagenes/SpaVecGeneratorVista3D.png',
      desc: '',
    },
    {
      nombre: 'Puntos y segmentos',
      img: '../assets/Imagenes/SpaVecGeneratorFigura.png',
      desc: '',
    },
  ];

  VectorImagenesBenso: Image[] = [
    {
      nombre: 'Menu Principal',
      img: '../assets/Imagenes/BensoSPAMenu.png',
      desc: '',
    },
    {
      nombre: 'Cotizacion',
      img: '../assets/Imagenes/BensoSPACotizacion.png',
      desc: '',
    },
    {
      nombre: 'Orden de Compra',
      img: '../assets/Imagenes/BensoSPAOC.png',
      desc: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
