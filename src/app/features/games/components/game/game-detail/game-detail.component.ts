import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '@app/core/models/game.model';
import { GamesService } from '@app/core/services/games.service';

@Component({
  selector: 'ng-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameDetailComponent implements OnInit {
  public game: Game;

  constructor(
    private activatedRoute: ActivatedRoute,
    private gamesService: GamesService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.game = this.gamesService.getGameById(id);
    this.cd.detectChanges();
  }
}
