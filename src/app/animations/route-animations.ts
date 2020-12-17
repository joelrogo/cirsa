import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
export const routeAnimations = trigger('routeAnimations', [
  transition('GameDetail <=> *, CollectCoins <=> *, NotFound <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
      optional: true,
    }),
    group([
      query(
        ':enter',
        [
          style({ transform: 'translateX(-100%)', opacity: 0.8 }),
          animate('0.3s ease', style({ transform: 'translateX(0%)' })),
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateX(0%)', opacity: 0.8 }),
          animate(
            '0.3s ease',
            style({ transform: 'translateX(-100%)'})
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);
