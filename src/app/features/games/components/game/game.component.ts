import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { Game, Games } from '@app/core/models/game.model';
import { GamesStore } from '@app/core/stores/games.store';

@Component({
  selector: 'ng-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameComponent implements OnInit {
  @Input() games: Games;
  @Output() openGame: EventEmitter<Game> = new EventEmitter<Game>();

  constructor(private cd: ChangeDetectorRef, private gamesStore: GamesStore) {}

  ngOnInit(): void {
  }

  cardClick(game: Game): void {
    this.openGame.emit(game);
  }
}
