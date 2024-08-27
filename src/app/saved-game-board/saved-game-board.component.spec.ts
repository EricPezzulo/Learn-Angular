import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedGameBoardComponent } from './saved-game-board.component';

describe('SavedGameBoardComponent', () => {
  let component: SavedGameBoardComponent;
  let fixture: ComponentFixture<SavedGameBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedGameBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedGameBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
