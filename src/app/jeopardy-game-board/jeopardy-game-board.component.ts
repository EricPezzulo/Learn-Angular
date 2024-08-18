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

  constructor(){
    this.gameData = this.GameDataService.getAllGameData();
  }

  // gameData: GameDataType = {
  //   categories: [
  //     { categoryName: 'TEST', categoryId: 0 },
  //     { categoryName: '', categoryId: 1 },
  //     { categoryName: '', categoryId: 2 },
  //     { categoryName: '', categoryId: 3 },
  //     { categoryName: '', categoryId: 4 },
  //   ],
  // '1stRow': [
  //   {
  //     A1: 'hi',
  //   },
  //   {
  //     B1: 'hiiii',
  //   },
  //   {
  //     C1: {
  //       value: 100,
  //       question: 'How many letters?',
  //       answer: { D: 14 },
  //       options: [{ A: 10 }, { B: 12 }, { C: 3 }, { D: 14 }],
  //     },
  //   },
  // ],
  // };

  onEditCategoryNameView() {
    this.isEditCategoryNameView = true;
    this.isEditQuestionView = false;
    // console.log(this.isEditCategoryNameView);
  }

  onEditQuestionView() {
    this.isEditQuestionView = true;
    this.isEditCategoryNameView = false;
  }

  receiveNewCategory($event: any) {
    this.promptInput = $event;
  }
  editTableCell(row: number, column:string) {
    console.log(this.gameData);
    // THIS NEEDS TO GET FIXED, its logging "row" instead of the number 
    const tableCell = {row: column}
    this.currentTableCell = tableCell;
    // if object value == 0 then open category view
    if (row === 0) {
      // chose which dialog to display
      this.onEditCategoryNameView();
      this.inputPrompt.openDialog();

      // wait for submited promptInput data.
      // maybe move this logic to other dialog file?
      // find table cell to edit
      // let categoryNumber = Object.values(tableCell)[0];
      // let cellToEdit = this.gameData.categories.find(
      //   (x) => x.categoryId === categoryNumber
      // );

      // if (cellToEdit) {
      //   cellToEdit.categoryName = this.promptInput;
      //   console.log({ input: this.promptInput, cellToEdit });
      // } else {
      //   console.log('cant find cell');
      // }
      // console.log(this.gameData)
    }
    if (row !== 0) {
      this.onEditQuestionView();
    }

    // this.inputPrompt.openDialog();

    // if (this.promptInput) {
    //   this.gameData.categories[0].categoryName = this.promptInput;
    // }
    // console.log(this.gameData);
  }

  onBackClick() {
    this.goBack.emit();
  }
}

// export interface GameData {
//   categories: Categories[];
// }

// export interface Categories {
//   categoryName: string;
//   categoryId: number;
// }
