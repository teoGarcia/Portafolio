import { Component, OnInit } from '@angular/core';
import { animation, trigger, style, animate, transition, state } from '@angular/animations';
import { translate } from '@angular/localize/src/utils';
import { NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss'],
  animations: [
    trigger('MovimientoProgress',[
      state('void', style({
        transform: 'translateX(-100)',
        // color: 'black' 
      })),
      transition(':enter', [
        animate('3s', style({
          transform: 'translateX(0)',

        }))
      ])
    ])
  ]
})
export class HabilidadesComponent implements OnInit {

  constructor(config: NgbProgressbarConfig){

    
    config.max = 100;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
    config.height = '1.5rem';


  }

  // constructor(private _Config:NgbProgressbarConfig) {

  //   _Config.height = '2rem';
  //   _Config.striped = true;
  //   _Config.animated = true;
    
  // }

  ngOnInit(): void {
  
  }

}
