import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FilterNamePipe } from '@app/core/pipes/filter-name.pipe';
import { FilterTypePipe } from '@app/core/pipes/filter-type.pipe';
import { SharedModule } from '@app/shared/shared.module';

import { GameModule } from './components/game/game.module';
import { GamesFiltersModule } from './components/games-filters/games-filters.module';
import { GamesManagementHomeComponent } from './games-home.component';
import { GamesManagementRoutingModule } from './games-management-routing.module';
import { GamesManagementComponent } from './games-management.component';

@NgModule({
  declarations: [GamesManagementComponent, GamesManagementHomeComponent, FilterNamePipe, FilterTypePipe],
  imports: [
    CommonModule,
    GamesManagementRoutingModule,
    GamesFiltersModule,
    GameModule,
    SharedModule,
  ],
  exports: [GamesManagementComponent],
})
export class GamesManagementModule {}
