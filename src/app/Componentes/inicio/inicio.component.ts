import { Component, OnInit } from '@angular/core';

import { animation, trigger, style, animate, transition, state } from '@angular/animations'
import { translate } from '@angular/localize/src/utils';


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


  }

}
