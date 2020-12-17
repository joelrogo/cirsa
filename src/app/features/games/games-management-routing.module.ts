import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectCoinsComponent } from './components/collect-coins/collect-coins.component';
import { GameDetailComponent } from './components/game/game-detail/game-detail.component';
import { GamesManagementHomeComponent } from './games-home.component';
import { GamesManagementComponent } from './games-management.component';


const routes: Routes = [
  {
    path: '',
    component: GamesManagementHomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: GamesManagementComponent,
      },
      {
        path: 'game/:id',
        component: GameDetailComponent,
        data: { animation: 'GameDetail' },
      },
      {
        path: 'collect-coins',
        component: CollectCoinsComponent,
        loadChildren: (): any =>
          import(
            '@app/features/games/components/collect-coins/collect-coins.module'
          ).then((load) => load.CollectCoinsModule),
        data: { animation: 'CollectCoins' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesManagementRoutingModule {}
