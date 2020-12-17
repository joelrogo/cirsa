import { animate, style, transition, trigger } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Game, Games } from '@app/core/models/game.model';

@Component({
  selector: 'ng-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('EnterLeave', [
      transition(':enter', [
        style({ position: 'relative', transform: 'scale(0.5)', opacity: 1 }),
        animate('0.3s ease'),
      ]),
      transition(':leave', [
        animate('0.3s ease', style({ transform: 'scale(0)', opacity: 1, position: 'relative' })),
      ]),
    ]),
  ],
})
export class GameComponent {
  @Input() games: Games;
  @Output() openGame: EventEmitter<Game> = new EventEmitter<Game>();

  constructor(private cd: ChangeDetectorRef) {}

  cardClick(game: Game): void {
    this.openGame.emit(game);
  }
}
