import { Component, ChangeDetectionStrategy } from '@angular/core';
import { routeAnimations } from '../../animations/route-animations';

@Component({
  selector: 'ng-games-management-home',
  template: `
    <div
      [@routeAnimations]="
        router &&
        router.activatedRouteData &&
        router.activatedRouteData['animation']
      "
    >
      <router-outlet #router="outlet"></router-outlet>
    </div>
  `,
  styles: [
    `
      :host,
      div {
        flex: 2 0 auto;
        width: 100%;
        display: flex;
      }
    `,
  ],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesManagementHomeComponent {}
