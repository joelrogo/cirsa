import { Component, OnInit, ChangeDetectionStrategy, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDrawer } from '@angular/material/sidenav';
import { TranslocoService } from '@ngneat/transloco';

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

  public lang: FormControl = new FormControl('es');

  constructor(private translocoService: TranslocoService) { }

  ngOnInit(): void {
    this.lang.valueChanges.subscribe(() => {
      this.translocoService.setActiveLang(this.lang.value);
    });
  }

  closedStartEvent(): void {
    this.closeSidenav.emit();
  }

}
