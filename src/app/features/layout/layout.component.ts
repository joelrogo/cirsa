import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ComponentPortal, Portal } from '@angular/cdk/portal';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'ng-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit, AfterViewInit {
  headerPortal: ComponentPortal<HeaderComponent>;
  footerPortal: ComponentPortal<FooterComponent>;
  
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.headerPortal = new ComponentPortal(HeaderComponent);
    this.footerPortal = new ComponentPortal(FooterComponent);
    this.cd.markForCheck();
  }

}
