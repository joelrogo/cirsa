import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ng-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  @Input() cardTitle: string;
  @Output() cardClick: EventEmitter<CardComponent> = new EventEmitter<CardComponent>();

  constructor() { }

  ngOnInit(): void {
  }

  public cardClickEvent(): void {
    this.cardClick.emit();
  }

}
