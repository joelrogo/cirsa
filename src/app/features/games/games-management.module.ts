import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { GamesManagementHomeComponent } from './games-home.component';
import { GamesManagementRoutingModule } from './games-management-routing.module';
import { GamesManagementComponent } from './games-management.component';

@NgModule({
  declarations: [GamesManagementComponent, GamesManagementHomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    GamesManagementRoutingModule
  ],
  exports: [GamesManagementComponent]
})
export class GamesManagementModule {}
