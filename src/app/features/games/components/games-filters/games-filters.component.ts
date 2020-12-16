import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { GAME_COLORS, GAME_TYPES } from '@app/core/models/game.model';
import { takeUntil } from 'rxjs/operators';

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
