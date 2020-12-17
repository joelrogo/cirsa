import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FooterComponent } from '@app/features/layout/components/footer/footer.component';

@Component({
  selector: 'ng-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundComponent implements OnInit {
  footerPortal: ComponentPortal<FooterComponent>;
  
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterContentChecked() {
    this.footerPortal = new ComponentPortal(FooterComponent);
    this.cd.markForCheck();
  }

}
