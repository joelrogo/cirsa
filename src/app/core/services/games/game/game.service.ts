import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GameModel } from '@app/core/models/game.model';
import { Observable } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class GameService {
  constructor(private httpClient: HttpClient) {}

  getAllGames(): Observable<GameModel[]> {
    return this.httpClient.get<GameModel[]>('/assets/json/gamesMock.json');
  }
}
