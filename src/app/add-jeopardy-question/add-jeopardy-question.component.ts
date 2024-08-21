import {
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import {
  AnswerOptions,
  GameBoardData,
  GameDataService,
} from '../gamedata.service';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-jeopardy-question',
  standalone: true,
  imports: [CommonModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './add-jeopardy-question.component.html',
  styleUrl: './add-jeopardy-question.component.scss',
  animations: [
    trigger('openDialog', [
      state('open', style({ opacity: 1, transform: 'translateY(0px)' })),
      state('closed', style({ opacity: 0, transform: 'translateY(35px)' })),
      transition('open <=> closed', animate('100ms')),
    ]),
    trigger('openBackdrop', [
      state('open', style({ opacity: 1, zIndex: 50 })),
      state('closed', style({ opacity: 0, zIndex: -50 })),
      transition('open <=> closed', animate('200ms')),
    ]),
  ],
})
export class AddJeopardyQuestionComponent {
  GameDataService: GameDataService = inject(GameDataService);
  isOpen: boolean = false;
  isBackdropOpen: boolean = false;

  inputValue: string = '';
  cell!: { [key: number]: string };
  @ViewChild('inputElement') inputElement!: ElementRef;
  @ViewChild('possibleAnsersElement') possibleAnswersElement!: ElementRef;
  @ViewChild('radioAnswersElement') radioAnswersElement!: ElementRef;
  gameData!: GameBoardData[];

  constructor() {
    this.gameData = this.GameDataService.getAllGameData();
  }

  category = new FormControl('');
  question = new FormControl('');
  answerOptionA = new FormControl('');
  answerOptionB = new FormControl('');
  answerOptionC = new FormControl('');
  answerOptionD = new FormControl('');
  correctAnswer = new FormControl('');

  @Input() currentTableCell!: { [key: number]: string };
  @Input() isEditCategoryNameView!: boolean;
  @Input() isEditQuestionView!: boolean;
  @Input() promptInput!: string;
  @Output() updateInputEvent: EventEmitter<string> = new EventEmitter<string>();

  currentCellData!: CurrentCell;

  getCurrentCell() {
    const row = Number(Object.keys(this.currentTableCell)[0]);
    const column = Object.values(this.currentTableCell)[0];
    const currentCellData = this.gameData.find(
      (x) => x.row === row && x.column === column
    );
    if (currentCellData?.complete) {
      // console.log(currentCellData)
      return currentCellData;
    }
    return { error: 'Current cell is not complete.' };
  }

  //! this is not auto focusing anymore
  // private focusInput() {
  //   if (this.inputElement) {
  //     console.log('found input');
  //     this.category.
  //   }
  // }
  openDialog() {
    const currentCell: CurrentCell = this.getCurrentCell();

    if (currentCell.complete) {
      this.currentCellData = currentCell;
      this.question.setValue(currentCell.question !== undefined ? this.question.value : null)
      // console.log(this.question.value);
      // console.log(this.currentCellData)
    }
    this.isBackdropOpen = true;
    this.isOpen = true;
    // this.focusInput();

    return { error: 'No Current Cell Found' };
  }

  closeDialog() {
    this.isBackdropOpen = false;
    this.isOpen = false;
    this.clearInput();
  }

  handleChange(e: Event) {
    const inputElement = e.target as HTMLInputElement;
    this.inputValue = inputElement.value;
  }

  submitCategory() {
    this.updateInputEvent.emit(this.inputValue);
    let categoryLetter = Object.keys(this.currentTableCell)[0];
    let categoryNumber = Object.values(this.currentTableCell)[0];
    const data = {
      row: categoryLetter,
      column: categoryNumber,
      input: this.inputValue,
    };
    this.GameDataService.addCategory(data);
    // console.log(this.GameDataService.getAllGameData())
    this.closeDialog();
    this.clearInput();
  }

  submitQuestion() {
    // const question= '';
    // const possibleAnswers: [{A:""}, {B:""},{C:""},{D:""}];
    // const answer: {A:''};
    let categoryLetter = Object.keys(this.currentTableCell)[0];
    let categoryNumber = Object.values(this.currentTableCell)[0];

    let row = categoryLetter;
    let column = categoryNumber;
console.log(this.question.value)
    const data = {
      question: this.question.value,
      A: this.answerOptionA.value,
      B: this.answerOptionB.value,
      C: this.answerOptionC.value,
      D: this.answerOptionD.value,
      answer: this.correctAnswer.value,
      row,
      column,
    };
    try {
      this.GameDataService.addQuestion(data);
      this.clearAllInputs();
    } catch (error) {
      console.log(error);
    }

    this.closeDialog();
  }

  clearAllInputs() {
    this.question.reset();
    this.answerOptionA.reset();
    this.answerOptionB.reset();
    this.answerOptionC.reset();
    this.answerOptionD.reset();
    this.correctAnswer.reset();
  }

  clearInput() {
    if (this.inputElement) {
      this.inputElement.nativeElement.value = '';
    }
  }
}

interface CurrentCell {
  answer?: { [key: string]: string } | {};
  answerOptions?: AnswerOptions;
  column?: string;
  complete?: boolean;
  pointValue?: number;
  question?: string;
  row?: number;
  error?: string;
}
