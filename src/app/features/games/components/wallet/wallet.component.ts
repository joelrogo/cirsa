import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { walletAnimation } from '@app/animations/wallet.animations';
import { WalletService } from '@app/core/services/wallet.service';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'ng-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [walletAnimation],
})
export class WalletComponent implements OnInit {
  public coins: number = null;
  public animate = false;

  constructor(
    private walletService: WalletService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.walletService.observWallet().subscribe((wallet) => {
      this.coins = wallet.coins;
      this.cd.detectChanges();
    });

    this.walletService
      .observWallet()
      .pipe(skip(2))
      .subscribe((r) => (this.animate = true));
  }

  animationEnds(): void {
    this.animate = false;
  }
}
