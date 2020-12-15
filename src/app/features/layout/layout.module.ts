import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SharedModule } from '@app/shared/shared.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, SidenavComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    PortalModule,
    MatSidenavModule,
    MatSelectModule,
    MatIconModule,
    SharedModule,
  ],
})
export class LayoutModule {}
