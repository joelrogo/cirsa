import { Component, OnInit, ChangeDetectionStrategy, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'ng-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnInit {
  @Input() openSidenav: boolean;
  @Output() closeSidenav = new EventEmitter<boolean>();
  @ViewChild(MatDrawer) drawer: MatDrawer;

  constructor() { }

  ngOnInit(): void {
  }

  closedStartEvent(): void {
    this.closeSidenav.emit();
  }

}
