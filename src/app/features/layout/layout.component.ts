import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'ng-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit {
  componentPortal: ComponentPortal<HeaderComponent>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.componentPortal = new ComponentPortal(HeaderComponent);
  }

}
