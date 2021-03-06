import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'ng-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  @Output() clickMenuEvent = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  openMenu() {
    this.clickMenuEvent.emit();
  }
}
