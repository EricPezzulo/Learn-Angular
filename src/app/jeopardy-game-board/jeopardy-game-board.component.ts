import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AddJeopardyQuestionComponent } from '../add-jeopardy-question/add-jeopardy-question.component';
import { inject } from '@angular/core';
import { GameBoardData, GameDataService } from '../gamedata.service';

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
  editTableCell(row: number, column: string) {
    const tableCell = { [row]: column };
    this.currentTableCell = tableCell;
    const cellIsComplete = this.isCellComplete(row, column);
    if (cellIsComplete) {
      // show data in the form
    }
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
  isCellComplete(row: number, column: string): boolean {
    // find cell on board
    let currentCell = this.gameData.find(
      (x) => x.row === row && x.column === column
    );
    // is cell complete?
    if (currentCell) {
      if (currentCell.complete) {
        // console.log(true)
        return true;
      }
    }
    // console.log(false)
    return false;
  }
  saveGame() {
    //check if all boxes are complete
    // if all boxes are complete -> create new saved game the current gameData.
    let gameComplete: boolean=false;
    for (let i = 0; i < this.gameData.length; i++) {
      if (this.gameData[i].complete) {
        gameComplete = true;
        i++
      } else {
        gameComplete = false;
      }
    }
    console.log(gameComplete);

    if(gameComplete === false){
      // do not let allow save.
      // show toast "Cannot save game, complete all cells"
    }
  }

  onBackClick() {
    this.goBack.emit();
  }
}
