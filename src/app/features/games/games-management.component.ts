import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '@app/core/models/game.model';
import { GamesService } from '@app/core/services/games.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ng-games-management',
  templateUrl: './games-management.component.html',
  styleUrls: ['./games-management.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesManagementComponent implements OnInit {
  public games$: Observable<Game[]> = this.gamesService.observGamesState();
  public searchText: string;
  public selectValue: number;

  constructor(private gamesService: GamesService, private router: Router) {}

  ngOnInit(): void {}

  filterSearch(searchText: string) {
    this.searchText = searchText;
  }

  filterOption(selectValue: number) {
    this.selectValue = selectValue;
  }

  goToGame(game: Game): void {
    this.router.navigate(['games/game/' + game.id]);
  }
}
