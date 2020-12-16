import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { GameModel } from '@app/core/models/game.model';
import { GameService } from '@app/core/services/games/game/game.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ng-games-management',
  templateUrl: './games-management.component.html',
  styleUrls: ['./games-management.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GamesManagementComponent implements OnInit {
  public games$: Observable<GameModel[]>;

  constructor(private gameService: GameService, private cd: ChangeDetectorRef, private router: Router) {}

  ngOnInit(): void {
    this.games$ = this.gameService.getAllGames();
  }

  goToGame(game: GameModel): void {
    this.router.navigate(['games/game/' + game.id]);
  }

}
