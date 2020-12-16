import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { GameModel } from '@app/core/models/game.model';

@Component({
  selector: 'ng-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameComponent implements OnInit {
  @Input() games: GameModel[];
  @Output() openGame: EventEmitter<GameModel> = new EventEmitter<GameModel>();

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.games = this.games;
      this.cd.markForCheck();
    }, 0);
  }

  cardClick(game: GameModel): void {
    this.openGame.emit(game);
  }
}
