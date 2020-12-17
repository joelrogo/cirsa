import {
  animate,
  group,
  keyframes,
  query,
  sequence,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
export const collectCoinsAnimation = trigger('collectCoinsAnimation', [
  state('true', style({ position: 'relative' })),
  transition('false => true', [
    group([
      query('.collect_coin', [
        animate(
          '3s ease',
          keyframes([
            style({
              position: 'relative',
              top: '0',
              transform: 'rotateY(0deg)',
            }),
            style({
              position: 'relative',
              top: '-350px',
              transform: 'rotateY(360deg)',
              filter: 'brightness(1.4)',
            }),
          ])
        ),
      ]),

      query('.collect_message', [
        animate(
          '3s ease',
          keyframes([
            style({
              position: 'relative',
              top: '0',
            }),
            style({
              position: 'relative',
              top: '-350px',
            }),
          ])
        ),
      ]),
    ]),
  ]),
]);
