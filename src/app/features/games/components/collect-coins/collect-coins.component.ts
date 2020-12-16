import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ng-collect-coins',
  templateUrl: './collect-coins.component.html',
  styleUrls: ['./collect-coins.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectCoinsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
