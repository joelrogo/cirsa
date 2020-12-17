import { Component, ChangeDetectionStrategy } from '@angular/core';
import { slideInAnimation } from './games-route-animation';

@Component({
  selector: 'ng-games-management-home',
  template: `
    <div [@routeAnimations]="o && o.activatedRouteData 
        && o.activatedRouteData['animation']">
      <router-outlet #o="outlet"></router-outlet>
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
  animations: [ slideInAnimation ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesManagementHomeComponent {}
