import {
  ChangeDetectionStrategy, Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { WalletComponent } from '../wallet/wallet.component';
import { WalletModule } from '../wallet/wallet.module';

@Component({
  selector: 'ng-collect-coins',
  templateUrl: './collect-coins.component.html',
  styleUrls: ['./collect-coins.component.scss'],
})
export class CollectCoinsComponent implements OnInit {
  @ViewChild(WalletComponent) wallet: WalletComponent;
  public addClass = false;

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.iconRegistry.addSvgIcon(
      'coin-base',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/images/coin.svg'
      )
    );
  }

  coinClick(): void {
    this.addClass = true;
      console.log(this.wallet);
      this.wallet.coinsToAdd = 100;
  }
}
