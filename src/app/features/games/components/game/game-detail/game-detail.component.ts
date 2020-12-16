import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';
import { GameService } from '@app/core/services/game.service';

@Component({
  selector: 'ng-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameDetailComponent implements OnInit {
  title: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private gameService: GameService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    const allGames = this.gameService.getAllGames();

    allGames.subscribe(games => {
      const findGameById = games.find(game => game.id === id);
      this.title = findGameById.name;
      this.cd.markForCheck();
    });
  }
}
