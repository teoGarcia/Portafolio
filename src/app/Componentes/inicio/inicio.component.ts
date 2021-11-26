import { Component, OnInit } from '@angular/core';

import { animation, trigger, style, animate, transition, state } from '@angular/animations'
import { translate } from '@angular/localize/src/utils';
import Typed from 'typed.js';




@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  animations: [
    trigger('PrimeroSegundo',[
      state('void', style({
        transform: 'translateX(-200%)',
        color: 'black' 
      })),
      transition(':enter', [
        animate('1s', style({
          transform: 'translateX(100)',
          color: 'white'

        }))
      ])
    ])
  ]
})
export class InicioComponent implements OnInit {
  
  

  constructor() { 

    
        

  }

  ngOnInit(): void {

    const typed = new Typed('.typed', {

      strings: [

        '<i class="habilidades">Q.A. Analyst</i>',
        '<i class="habilidades">Developer</i>'
      
      ],

      //stringsElement: 
      typeSpeed: 75,
      startDelay: 1000,
      backSpeed: 75,
      shuffle: false,
      backDelay: 1500,
      loop: true,
    
    });
  }

}
