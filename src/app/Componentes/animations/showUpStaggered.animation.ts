import { trigger, state, stagger, style, transition, animate, query } from '@angular/animations';


export const showUpStaggered = () => {
  return trigger('showUpElements', [
   transition('* => *', [
     query(':enter',  [
      style({ opacity: 0, transform: 'scaleY(0)'}),
      stagger(200, [
        animate(300, style({ opacity: 1, transform: 'scaleY(1)'}))
      ])
     ], { optional: true })
   ])
  ])
  
}