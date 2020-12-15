import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { GamesFiltersComponent } from './games-filters.component';

@NgModule({
  declarations: [GamesFiltersComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    SharedModule
  ],
  exports: [GamesFiltersComponent]
})
export class GamesFiltersModule {}
