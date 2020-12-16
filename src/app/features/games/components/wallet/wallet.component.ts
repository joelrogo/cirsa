import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WalletComponent implements OnInit {
  @Input() coinsToAdd: number = 0;
  public coins: number = 100000000;

  constructor() { }

  ngOnInit(): void {
    this.coins = this.coins + this.coinsToAdd;
  }

}
