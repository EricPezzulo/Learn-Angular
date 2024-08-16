import {
  Component,
  ElementRef,
  EventEmitter,
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
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-jeopardy-question',
  standalone: true,
  imports: [CommonModule],
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
  isOpen: boolean = false;
  isBackdropOpen: boolean = false;

  inputValue: string = '';

  @ViewChild('inputElement') inputElement!: ElementRef;

  // @Input() elemList!: elemListType[];

  private focusInput() {
    if (this.inputElement) {
      this.inputElement.nativeElement.focus();
    }
  }

  @Input() isEditCategoryNameView!: boolean;
  @Input() isEditQuestionView!:boolean;
  openDialog() {
    this.isBackdropOpen = true;
    this.isOpen = true;
    this.focusInput();
   
    console.log(this.isEditCategoryNameView);
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
    console.log(this.inputValue);
    this.closeDialog();
    this.clearInput();
  }

  submit() {
    const newItem = { id: uuidv4(), item: this.inputValue, completed: false };
    // this.elemList.push(newItem);
    this.clearInput();
    this.closeDialog();
    // console.log(this.elemList)
  }
  clearInput() {
    if(this.inputElement){
    this.inputElement.nativeElement.value = '';}
  }
}
