import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesFiltersComponent } from './games-filters.component';

describe('GamesFiltersComponent', () => {
  let component: GamesFiltersComponent;
  let fixture: ComponentFixture<GamesFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
