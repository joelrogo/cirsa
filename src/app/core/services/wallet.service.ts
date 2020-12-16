import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Wallet } from '../models/wallet.model';
import { WalletQuery } from '../queries/wallet.query';
import { WalletStore } from '../stores/wallet.store';

@Injectable({ providedIn: 'root' })
export class WalletService {
  constructor(
    private walletQuery: WalletQuery,
    private walletStore: WalletStore
  ) {
    if(!this.walletStore.getValue().coins) {
      this.walletStore.update({ coins: 10000000 });
    }
  }

  observWallet(): Observable<Wallet> {
    return this.walletQuery.select();
  }

  getWallet(): Wallet {
    return this.walletQuery.getValue();
  }
}
