import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';

import { WalletComponent } from './wallet.component';

@NgModule({
  declarations: [WalletComponent],
  imports: [
    CommonModule,
    MatIconModule,
    SharedModule
  ],
  exports: [WalletComponent]
})
export class WalletModule {}
