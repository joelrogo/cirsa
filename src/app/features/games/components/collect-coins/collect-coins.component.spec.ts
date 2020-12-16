import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectCoinsComponent } from './collect-coins.component';

describe('CollectCoinsComponent', () => {
  let component: CollectCoinsComponent;
  let fixture: ComponentFixture<CollectCoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectCoinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
