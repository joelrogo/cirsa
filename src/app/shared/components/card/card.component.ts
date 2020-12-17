import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { Game } from '@app/core/models/game.model';

@Component({
  selector: 'ng-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  @Input() game: Game;
  @Output() cardClick: EventEmitter<CardComponent> = new EventEmitter<CardComponent>();

  constructor() { }

  ngOnInit(): void {
  }

  public cardClickEvent(): void {
    this.cardClick.emit();
  }

}
