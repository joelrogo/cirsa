import {
  animate,
  query,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
export const walletAnimation = trigger('walletAnimation', [
  state('true', style({ position: 'relative' })),
  transition('false => true', [
    query('.c-wallet', [
      animate(
        '300ms ease',
        style({
          transform: 'scale(1.1)',
        })
      ),
    ]),
  ]),
]);
