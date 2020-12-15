import { SelectItemIdName } from './generic.model';

export enum GAME_COLORS {
  BLUE = 0,
  RED = 1,
  GOLD = 2
}

export enum GAME_TYPES {
  NOVELTY = 0,
  ROULETTE = 1,
  JACKPOT = 2
}

export interface GameModel {
  id: string;
  name: string;
  type: SelectItemIdName;
  color: SelectItemIdName;
  image: string;
}
