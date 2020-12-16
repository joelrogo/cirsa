import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Wallet } from '../models/wallet.model';

export function createInitialState(): Wallet {
  return {
    coins: null,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'wallet' })
export class WalletStore extends Store<Wallet> {
  constructor() {
    super(createInitialState());
  }

  addCoins(coins: number): void {
    const c = this.getValue().coins + coins;
    this.update({ coins: c });
  }

  updateWallet(wallet: Partial<Wallet>): void {
    this.update((state) => {
      return {
        ...state,
        ...wallet,
      };
    });
  }

  resetWallet(): void {
    this.update(createInitialState());
  }
}
