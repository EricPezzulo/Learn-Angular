import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeopardyGameBoardComponent } from './jeopardy-game-board.component';

describe('JeopardyGameBoardComponent', () => {
  let component: JeopardyGameBoardComponent;
  let fixture: ComponentFixture<JeopardyGameBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JeopardyGameBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeopardyGameBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
