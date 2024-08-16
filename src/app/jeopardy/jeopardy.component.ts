import { ChangeDetectorRef, Component, inject, ViewChild } from '@angular/core';
import { ReusableDialogComponent } from '../reusable-dialog/reusable-dialog.component';
import { AddJeopardyQuestionComponent } from '../add-jeopardy-question/add-jeopardy-question.component';
import { JeopardyGameBoardComponent } from '../jeopardy-game-board/jeopardy-game-board.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jeopardy',
  standalone: true,
  imports: [
    ReusableDialogComponent,
    AddJeopardyQuestionComponent,
    JeopardyGameBoardComponent,
    CommonModule,
  ],

  templateUrl: './jeopardy.component.html',
  styleUrl: './jeopardy.component.scss',
})
export class JeopardyComponent {
  @ViewChild(AddJeopardyQuestionComponent)
  dialog!: AddJeopardyQuestionComponent;
  currentTab: string = 'chose-options';

  choseGameOption(gameOption: string) {
    this.currentTab = gameOption;
  }
  goBack() {
    this.currentTab = 'chose-options';
    console.log(this.currentTab);
  }
  c1q1 = {
    value: '100',
    question: 'How many dogs',
    options: [{ A: 4 }, { B: 12 }, { C: 14 }, { D: 5 }],
    answer: { D: 5 },
  };

  openQuestion() {
    this.dialog.openDialog();
    console.log({
      question: this.c1q1.question,
      options: this.c1q1.options,
      answer: this.c1q1.answer,
    });
  }
}
