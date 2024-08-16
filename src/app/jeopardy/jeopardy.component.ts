import { Component, ViewChild } from '@angular/core';
import { ReusableDialogComponent } from '../reusable-dialog/reusable-dialog.component';

@Component({
  selector: 'app-jeopardy',
  standalone: true,
  imports: [ReusableDialogComponent],
  templateUrl: './jeopardy.component.html',
  styleUrl: './jeopardy.component.scss',
})
export class JeopardyComponent {
  @ViewChild(ReusableDialogComponent) questionDialog!: ReusableDialogComponent;

  c1q1 = {
   
    value: '100',
    question: 'How many dogs',
    options: [{ A: 4 }, { B: 12 }, { C: 14 }, { D: 5 }],
    answer: { D: 5 },
  };

  openQuestion() {
    this.questionDialog.openDialog();
    console.log({question: this.c1q1.question, options: this.c1q1.options, answer: this.c1q1.answer  })
  }
}
