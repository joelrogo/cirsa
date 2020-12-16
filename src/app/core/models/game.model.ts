import { SelectItemIdName } from './generic.model';

export enum GAME_COLORS {
  PINK = 1,
  RED = 2,
  GOLD = 3
}

export enum GAME_TYPES {
  NOVELTY = 1,
  ROULETTE = 2,
  JACKPOT = 3
}

export interface GameModel {
  id: string;
  name: string;
  type: SelectItemIdName;
  color: SelectItemIdName;
  image: string;
}
