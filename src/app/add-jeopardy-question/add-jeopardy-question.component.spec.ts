import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJeopardyQuestionComponent } from './add-jeopardy-question.component';

describe('AddJeopardyQuestionComponent', () => {
  let component: AddJeopardyQuestionComponent;
  let fixture: ComponentFixture<AddJeopardyQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddJeopardyQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddJeopardyQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
