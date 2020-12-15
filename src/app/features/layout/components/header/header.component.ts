import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ng-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @Output() clickMenuEvent = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  openMenu() {
    this.clickMenuEvent.emit();
  }

}
