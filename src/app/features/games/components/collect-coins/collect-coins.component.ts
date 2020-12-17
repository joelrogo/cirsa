import { flatten } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { collectCoinsAnimation } from '@app/animations/collect-coins-animations';
import { WalletStore } from '@app/core/stores/wallet.store';
import { WalletComponent } from '../wallet/wallet.component';

@Component({
  selector: 'ng-collect-coins',
  templateUrl: './collect-coins.component.html',
  styleUrls: ['./collect-coins.component.scss'],
  animations: [collectCoinsAnimation]
})
export class CollectCoinsComponent implements OnInit {
  @ViewChild(WalletComponent) wallet: WalletComponent;
  public animate = false;
  public generatedCoins = 0;

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private walletStore: WalletStore,
  ) {}

  ngOnInit(): void {
    this.iconRegistry.addSvgIcon(
      'coin-base',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/coin.svg')
    );
  }

  coinClick(): void {
    this.animate = !this.animate;
    this.generatedCoins = Math.floor(Math.random() * 3500 + 1500);
    this.walletStore.addCoins(this.generatedCoins);
  }

  animationEnds(event): void {
    this.animate = false;
  }
}
