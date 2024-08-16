import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AddJeopardyQuestionComponent } from '../add-jeopardy-question/add-jeopardy-question.component';

@Component({
  selector: 'app-jeopardy-game-board',
  standalone: true,
  imports: [MatIconModule, CommonModule, AddJeopardyQuestionComponent],
  templateUrl: './jeopardy-game-board.component.html',
  styleUrl: './jeopardy-game-board.component.scss',
})
export class JeopardyGameBoardComponent {
  @Output() goBack: EventEmitter<void> = new EventEmitter<void>();
  @ViewChild(AddJeopardyQuestionComponent)
  inputPrompt!: AddJeopardyQuestionComponent;
  promptInput!: string;
  isEditCategoryNameView: boolean = false;
  isEditQuestionView: boolean = false;
  gameData: gameDataType = {
    categories: [
      { categoryName: 'TEST', categoryId: 1 },
      { categoryName: '', categoryId: 2 },
      { categoryName: '', categoryId: 3 },
      { categoryName: '', categoryId: 4 },
      { categoryName: '', categoryId: 5 },
    ],
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
  };

  onEditCategoryNameView() {
    this.isEditCategoryNameView = true;
    this.isEditQuestionView = false;
    console.log(this.isEditCategoryNameView);
  }

  onEditQuestionView() {
    this.isEditQuestionView = true;
    this.isEditCategoryNameView = false;
  }

  editTableCell(tableCell: any) {
    // if object value == 0 then open category view
    if (Object.entries(tableCell)[0][1] === 0) {
    }
    // open dialog
    this.inputPrompt.openDialog();
    // if (this.promptInput) {
    //   this.gameData.categories[0].categoryName = this.promptInput;
    // }
    // console.log(this.gameData);
  }

  onBackClick() {
    this.goBack.emit();
  }
}

export interface gameDataType {
  categories: categories[];
}

export interface categories {
  categoryName: string;
  categoryId: number;
}
