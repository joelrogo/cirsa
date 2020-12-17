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
        position: relative;
        flex: 2 0 auto;
        width: 100%;
        display: flex;
        overflow-x: hidden;
        flex-direction: column;
      }
    `,
  ],
  animations: [routeAnimations],
})
export class GamesManagementHomeComponent {}
