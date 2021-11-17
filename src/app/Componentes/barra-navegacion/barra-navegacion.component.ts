import { style } from '@angular/animations';
import { NgStyle } from '@angular/common';
import { viewClassName } from '@angular/compiler';
import { Component, OnInit, ElementRef, ViewChild, ViewChildren} from '@angular/core';
import { showUpStaggered } from 'src/app/Componentes/animations/showUpStaggered.animation';

interface MenuItemsI {
  title: String;
  icon: String;
  link: String; 
}

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.scss'],
  animations: [showUpStaggered()]
})
export class BarraNavegacionComponent{

  CentrarBarraNav: boolean = true;
  boton: boolean = true;
  move: String = "";

  menu: {
    title: string;
    icon: string;
    link: string;
  }[] = [];

  constructor() { 
    this.generateMenu();

  }

  generateMenu(): void {
    this.menu = [
      {
        title: 'Inicio',
        icon: 'fas fa-home',
        link: '/'
      },
      {
        title: 'Datos Personales',
        icon: 'fas fa-id-card',
        link: 'Datos-personales'
      },
      {
        title: 'Habilidades',
        icon: 'fas fa-skiing',
        link: 'Habilidades'
      },
      {
        title: 'Proyectos',
        icon: 'fas fa-file-contract',
        link: 'Proyectos'
      },
      {
        title: 'Estudios',
        icon: 'fas fa-user-graduate',
        link: 'Estudios'
      }
    ]
  }
  presionar(){

    if(this.boton == true){

      this.move = '0';
      this.boton = false;

    }else{

      this.move = '100%';
      this.boton = true;
    }
    
  }
}
