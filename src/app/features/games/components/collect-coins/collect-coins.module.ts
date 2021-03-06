import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '@app/shared/shared.module';

import { CollectCoinsComponent } from './collect-coins.component';


@NgModule({
  declarations: [CollectCoinsComponent],
  imports: [
    CommonModule,
    MatIconModule,
    SharedModule
  ],
  exports: [CollectCoinsComponent]
})
export class CollectCoinsModule {}
