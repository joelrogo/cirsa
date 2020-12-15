import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ng-games-management',
  templateUrl: './games-management.component.html',
  styleUrls: ['./games-management.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GamesManagementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
