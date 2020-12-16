import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { GameComponent } from './game.component';
import { MatCardModule } from '@angular/material/card'

import { CardModule } from '@app/shared/components/card/card.module';

@NgModule({
  declarations: [GameComponent],
  imports: [
    CommonModule,
    MatCardModule,
    CardModule,
    SharedModule
  ],
  exports: [GameComponent]
})
export class GameModule {}
