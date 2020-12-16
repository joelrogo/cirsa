import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { WalletService } from '@app/core/services/wallet.service';

@Component({
  selector: 'ng-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WalletComponent implements OnInit {
  public coins: number = null;

  constructor(private walletService: WalletService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.walletService.observWallet().subscribe(wallet => {
      this.coins = wallet.coins;
      this.cd.detectChanges();
    })
  }

}
