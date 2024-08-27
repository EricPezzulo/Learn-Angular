import { ChangeDetectorRef, Component, inject, ViewChild } from '@angular/core';
import { ReusableDialogComponent } from '../reusable-dialog/reusable-dialog.component';
import { AddJeopardyQuestionComponent } from '../add-jeopardy-question/add-jeopardy-question.component';
import { JeopardyGameBoardComponent } from '../jeopardy-game-board/jeopardy-game-board.component';
import { CommonModule } from '@angular/common';
import { SavedGamesComponent } from '../saved-games/saved-games.component';

@Component({
  selector: 'app-jeopardy',
  standalone: true,
  imports: [
    ReusableDialogComponent,
    AddJeopardyQuestionComponent,
    JeopardyGameBoardComponent,
    CommonModule,
    SavedGamesComponent,
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

  openQuestion() {
    this.dialog.openDialog();
  }
}
