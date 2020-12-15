import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ng-games-management-home',
  template: '<router-outlet></router-outlet>',
  styles: [
    `
      :host {
        height: 100%;
        flex: 2 0 auto;
        width: 100%;
        display: flex;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesManagementHomeComponent {}
