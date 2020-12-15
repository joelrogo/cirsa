import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
        path: ':id',
        component: GameComponent,
        loadChildren: (): any =>
          import('@app/features/games/components/game/game.module').then((load) => load.GameModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesManagementRoutingModule {}
