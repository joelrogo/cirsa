import {
  animate,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
export const routeAnimations = trigger('routeAnimations', [
  transition(
    'GameDetail => CollectCoins, CollectCoins => GameDetail, Games => CollectCoins, CollectCoins => Games, Games => GameDetail, GameDetail => Games',
    [
      query(':enter', [
        style({
          position: 'absolute',
          height: '*',
          width: '*',
          transform: 'translateX(-120%)',
        }),
      ]),
      query(':leave', [
        style({
          position: 'absolute',
          height: '100%',
          width: '100%',
          top: 0,
          left: 0,
          transform: 'translateX(0%)',
        }),
      ]),
      query(
        ':leave',
        animate(
          '150ms ease-in-out',
          style({
            transform: 'translateX(120%)',
          })
        )
      ),

      query(
        ':enter',
        animate(
          '150ms ease-in-out',
          style({
            transform: 'translateX(0%)',
          })
        )
      ),
    ]
  ),
]);
