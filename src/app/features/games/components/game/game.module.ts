import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { GameComponent } from './game.component';
import { MatCardModule } from '@angular/material/card'

import { CardModule } from '@app/shared/components/card/card.module';
import { GameDetailComponent } from './game-detail/game-detail.component';

@NgModule({
  declarations: [GameComponent, GameDetailComponent],
  imports: [
    CommonModule,
    MatCardModule,
    CardModule,
    SharedModule
  ],
  exports: [GameComponent]
})
export class GameModule {}
