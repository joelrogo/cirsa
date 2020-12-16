import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Game, Games } from '../models/game.model';
import { GamesStore } from '../stores/games.store';

@Injectable({ providedIn: 'root' })
export class GamesQuery extends QueryEntity<Games> {
  constructor(protected store: GamesStore) {
    super(store);
  }
}