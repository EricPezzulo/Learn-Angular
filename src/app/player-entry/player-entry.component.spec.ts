import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerEntryComponent } from './player-entry.component';

describe('PlayerEntryComponent', () => {
  let component: PlayerEntryComponent;
  let fixture: ComponentFixture<PlayerEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
