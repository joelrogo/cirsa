import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Wallet } from '../models/wallet.model';
import { WalletStore } from '../stores/wallet.store';

@Injectable({ providedIn: 'root' })
export class WalletQuery extends Query<Wallet> {  
  constructor(protected store: WalletStore) {
    super(store);
  }
}