import { EntityState } from '@datorama/akita';
import { SelectItemIdName } from './generic.model';

export enum GAME_COLORS {
  PINK = 1,
  RED = 2,
  GOLD = 3,
}

export enum GAME_TYPES {
  NOVELTY = 1,
  ROULETTE = 2,
  SLOT = 3,
}

export interface Game {
  id: string;
  name: string;
  type: SelectItemIdName;
  color: SelectItemIdName;
  image: string;
}

export interface Games extends EntityState<Game> {}
