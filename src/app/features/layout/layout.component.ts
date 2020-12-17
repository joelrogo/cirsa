import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { ComponentPortal, Portal } from '@angular/cdk/portal';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'ng-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit, AfterContentChecked {
  footerPortal: ComponentPortal<FooterComponent>;
  openSidenav: boolean = false;
  
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterContentChecked() {
    this.footerPortal = new ComponentPortal(FooterComponent);
    this.cd.markForCheck();
  }

  openSidenavFn(): void {
    if (!this.openSidenav) {
      this.openSidenav = true;
    } else {
      this.openSidenav = false;
    }
  }

}
