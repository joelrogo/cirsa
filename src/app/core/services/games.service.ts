import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game, Games } from '@app/core/models/game.model';
import { Observable } from 'rxjs';
import { GamesQuery } from '../queries/games.query';
import { GamesStore } from '../stores/games.store';

@Injectable({ providedIn: 'root' })
export class GamesService {
  constructor(
    private httpClient: HttpClient,
    private gamesStore: GamesStore,
    private gamesQuery: GamesQuery
  ) {
    this.httpClient
      .get<Game[]>('/assets/json/gamesMock.json')
      .subscribe((games) => this.gamesStore.add(games));
  }

  observGamesState(): Observable<Game[]> {
    return this.gamesQuery.selectAll();
  }

  getGamesState(): Games {
    return this.gamesQuery.getAll();
  }


  getGameById(id: string): Game {
    const games = this.getGamesState();
    if (!games) {
      return null;
    }
    const findGame = games.find((game) => game.id === id);
    return findGame ? findGame : null;
  }
}
