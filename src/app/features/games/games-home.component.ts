import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ng-games-management-home',
  template: '<router-outlet></router-outlet>',

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesManagementHomeComponent {}
