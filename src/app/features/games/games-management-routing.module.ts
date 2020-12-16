import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectCoinsComponent } from './components/collect-coins/collect-coins.component';
import { GameComponent } from './components/game/game.component';

import { GamesManagementHomeComponent } from './games-home.component';
import { GamesManagementComponent } from './games-management.component';

const routes: Routes = [
  {
    path: '',
    component: GamesManagementHomeComponent,
    children: [
      {
        path: '',
        component: GamesManagementComponent,
      },
      {
        path: 'game/:id',
        component: GameComponent,
        loadChildren: (): any =>
          import('@app/features/games/components/game/game.module').then((load) => load.GameModule),
      },
      {
        path: 'collect-coins',
        component: CollectCoinsComponent,
        loadChildren: (): any =>
          import('@app/features/games/components/collect-coins/collect-coins.module').then((load) => load.CollectCoinsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesManagementRoutingModule {}
