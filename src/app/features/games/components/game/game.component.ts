import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { GameModel } from '@app/core/models/game.model';

@Component({
  selector: 'ng-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameComponent implements OnInit {
  @Input() games: GameModel[];

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.games = this.games;
      this.cd.markForCheck();
    }, 0);
  }

  openGame(game: GameModel): void {
    console.log("Open ", game);
  }
}
