import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ng-games-filters',
  templateUrl: './games-filters.component.html',
  styleUrls: ['./games-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GamesFiltersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
