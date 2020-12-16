import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { Game, Games } from '../models/game.model';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'games' })
export class GamesStore extends EntityStore<Games, Game> {
  constructor() {
    super() ;
  }
}