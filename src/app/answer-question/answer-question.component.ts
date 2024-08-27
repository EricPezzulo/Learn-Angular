import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CurrentCell } from '../add-jeopardy-question/add-jeopardy-question.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-answer-question',
  standalone: true,
  imports: [CommonModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './answer-question.component.html',
  styleUrl: './answer-question.component.scss',
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
export class AnswerQuestionComponent {
  isBackdropOpen: boolean = false;
  isDialogOpen: boolean = false;
  @Input() currentCell: CurrentCell = { answerOptions: [] };

  optionA: string = '';
  optionB: string = '';
  optionC: string = '';
  optionD: string = '';
  question: string = '';
  // radioOptionA = new FormControl<string | {}>('');
  // radioOptionB = new FormControl<string | {}>('');
  // radioOptionC = new FormControl<string | {}>('');
  // radioOptionD = new FormControl<string | {}>('');
  answer = new FormControl();

  closeDialog() {
    this.isBackdropOpen = false;
    this.isDialogOpen = false;
  }
  openDialog() {
    this.isBackdropOpen = true;
    this.isDialogOpen = true;
    this.answer.reset();
  }

  submit() {
    console.log(this.currentCell);

    if (this.currentCell.answer) {
      const answer = Object.keys(this.currentCell.answer)[0];
      if (this.answer.value === answer) {
        console.log('correct');
        // display correct animation
        // add currentCell.pointValue to team who answered
      } else {
        console.log('incorrect');
        // display incorrect animation
      }
      this.closeDialog();
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    if (this.currentCell?.answerOptions) {
      this.optionA = Object.values(this.currentCell.answerOptions[0])[0];
      this.optionB = Object.values(this.currentCell.answerOptions[1])[0];
      this.optionC = Object.values(this.currentCell.answerOptions[2])[0];
      this.optionD = Object.values(this.currentCell.answerOptions[3])[0];
    } else {
      console.log('no answer options found');
    }
    if (this.currentCell?.question) {
      this.question = this.currentCell.question;
    } else {
      console.log('no question found');
    }
  }
}