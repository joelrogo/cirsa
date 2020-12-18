import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { GAME_TYPES } from '@app/core/models/game.model';

@Component({
  selector: 'ng-games-filters',
  templateUrl: './games-filters.component.html',
  styleUrls: ['./games-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GamesFiltersComponent implements OnInit {
  @Output() searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() selectOptionChanged: EventEmitter<string> = new EventEmitter<string>();

  gameTypes = GAME_TYPES;

  searchText: FormControl = new FormControl();
  selectOption: FormControl = new FormControl();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchText.valueChanges.subscribe(() => {
      this.searchTextChanged.emit(this.searchText.value);
    });
    this.selectOption.valueChanges.subscribe(() => {
      this.selectOptionChanged.emit(this.selectOption.value);
    });
  }

}
