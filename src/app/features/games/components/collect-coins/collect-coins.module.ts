import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { CollectCoinsComponent } from './collect-coins.component';
import { MatCardModule } from '@angular/material/card'

import { CardModule } from '@app/shared/components/card/card.module';

@NgModule({
  declarations: [CollectCoinsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [CollectCoinsComponent]
})
export class CollectCoinsModule {}
