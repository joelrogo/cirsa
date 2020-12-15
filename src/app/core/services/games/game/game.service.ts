/* import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GameModel } from '@app/core/models/game.model';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GameService {
  constructor(private httpClient: HttpClient) {}
  login(email: string, password: string): Observable<AuthModel> {
    const body = { email: email, password: password };
    console.log('body to BE: ', body);
    // return this.httpClient.post('url', { email: email, password: password });
    return of({ token: '123456789' });
  }

  /* return this.http.get<Reply<SelectItemIdName>>(url, withCache()).pipe(map((res) => res.data)); */

  getAllGames(): Observable<GameModel[]> {
    return of();
  }

  get list(): EndpointMockApi<any>[] {
    return [
      {
        handle: (): Observable<ReplySingle<Product>> => this.getOffers(),
      },
    ];
  }

  /*  private getOffers(): Observable<ReplySingle<Product>> {
    return this.httpClient.get<ReplySingle<Product>>('assets/mockapi/offers-search.json');
  } */
}
 */