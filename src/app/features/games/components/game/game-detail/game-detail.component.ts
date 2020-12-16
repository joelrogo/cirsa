import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';
import { GamesService } from '@app/core/services/games.service';

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
    private gamesService: GamesService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.title = this.gamesService.getGameById(id).name;
    this.cd.detectChanges();
  }
}
