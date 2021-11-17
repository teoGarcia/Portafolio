import { trigger, state, style, transition, animate } from '@angular/animations';

export const showRight = () => {
  return trigger('showRightElement', [
    state('in', style({
      opacity: 1,
      transform: 'translate(0px)'
    })),
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translate(-50%)'
      }),
      animate(500)
    ])
  ])
  
}