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
import { GameDataService } from '../gamedata.service';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-jeopardy-question',
  standalone: true,
  imports: [CommonModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './add-jeopardy-question.component.html',
  styleUrl: './add-jeopardy-question.component.css',
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


  category = new FormControl('')
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

  //! this is not auto focusing anymore
  // private focusInput() {
  //   if (this.inputElement) {
  //     console.log('found input');
  //     this.category.
  //   }
  // }
  openDialog() {
    this.isBackdropOpen = true;
    this.isOpen = true;
    // this.focusInput();
    console.log(this.currentTableCell);
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
      console.log('before clear input');
      this.clearAllInputs();
      console.log('after clear input');
    } catch (e) {
      console.log(e);
    }

    this.closeDialog();
  }

  clearAllInputs() {
    this.question.reset()
    this.answerOptionA.reset()
    this.answerOptionB.reset()
    this.answerOptionC.reset()
    this.answerOptionD.reset()
    this.correctAnswer.reset()
    
  }

  clearInput() {
    if (this.inputElement) {
      this.inputElement.nativeElement.value = '';
    }
  }
}
