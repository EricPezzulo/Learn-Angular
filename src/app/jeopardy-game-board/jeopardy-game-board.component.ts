import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AddJeopardyQuestionComponent } from '../add-jeopardy-question/add-jeopardy-question.component';
import { inject } from '@angular/core';
import { GameBoardData, GameDataService } from '../gamedata.service';
import { table } from 'node:console';

@Component({
  selector: 'app-jeopardy-game-board',
  standalone: true,
  imports: [MatIconModule, CommonModule, AddJeopardyQuestionComponent],
  templateUrl: './jeopardy-game-board.component.html',
  styleUrl: './jeopardy-game-board.component.scss',
})
export class JeopardyGameBoardComponent {
  GameDataService: GameDataService = inject(GameDataService);
  @Output() goBack: EventEmitter<void> = new EventEmitter<void>();
  @ViewChild(AddJeopardyQuestionComponent)
  inputPrompt!: AddJeopardyQuestionComponent;
  promptInput!: string;
  isEditCategoryNameView: boolean = false;
  isEditQuestionView: boolean = false;
  categoryName!: string;
  currentTableCell!: {};

  gameData!: GameBoardData[];

  constructor() {
    this.gameData = this.GameDataService.getAllGameData();
  }

  onEditCategoryNameView() {
    this.isEditCategoryNameView = true;
    this.isEditQuestionView = false;
    // console.log(this.isEditCategoryNameView);
  }

  onEditQuestionView() {
    this.isEditQuestionView = true;
    this.isEditCategoryNameView = false;
    // console.log(this.currentTableCell);
  }

  receiveNewCategory($event: any) {
    this.promptInput = $event;
  }
  async editTableCell(row: number, column: string) {
    // console.log(this.gameData);
    const tableCell = { [row]: column };
    // console.log(row, column, tableCell);
    this.currentTableCell = tableCell;

    setTimeout(() => {
      if (row === 0) {
        // chose which dialog to display
        this.onEditCategoryNameView();
        this.inputPrompt.openDialog();
      }
      if (row !== 0) {
        this.onEditQuestionView();
        this.inputPrompt.openDialog();
      }
    }, 1);
  }

  onBackClick() {
    this.goBack.emit();
  }
}

