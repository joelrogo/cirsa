import {
  ChangeDetectionStrategy,
  ChangeDetectorRef, Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import { GameModel } from '@app/core/models/game.model';
import { GameService } from '@app/core/services/game.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ng-games-management',
  templateUrl: './games-management.component.html',
  styleUrls: ['./games-management.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesManagementComponent implements OnInit {
  public games$: Observable<GameModel[]> = this.gameService.getAllGames();
  public searchText: string;
  public selectValue: number;

  constructor(
    private gameService: GameService,
    private cd: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  filterSearch(searchText: string) {
    this.searchText = searchText;
  }

  filterOption(selectValue: number) {
    this.selectValue = selectValue;
  }

  goToGame(game: GameModel): void {
    this.router.navigate(['games/game/' + game.id]);
  }
}
