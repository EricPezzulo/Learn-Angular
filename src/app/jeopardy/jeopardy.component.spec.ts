import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeopardyComponent } from './jeopardy.component';

describe('JeopardyComponent', () => {
  let component: JeopardyComponent;
  let fixture: ComponentFixture<JeopardyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JeopardyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeopardyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
