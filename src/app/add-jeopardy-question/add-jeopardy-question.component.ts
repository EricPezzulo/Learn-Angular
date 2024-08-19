import {
  Component,
  ElementRef,
  EventEmitter,
  inject,
  input,
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
import { GameDataService } from '../gamedata.service';

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
   GameDataService: GameDataService = inject(GameDataService);
  isOpen: boolean = false;
  isBackdropOpen: boolean = false;

  inputValue: string = '';

  @ViewChild('inputElement') inputElement!: ElementRef;

  
//! this is not auto focusing anymore
  private focusInput() {
    if (this.inputElement) {
      console.log('found input')
      this.inputElement.nativeElement.focus();
    }
  }

  @Input() currentTableCell!:any
  @Input() isEditCategoryNameView!: boolean;
  @Input() isEditQuestionView!: boolean;
  @Input() promptInput!:string
  @Output() updateInputEvent: EventEmitter<string> = new EventEmitter<string>
  openDialog() {
    this.isBackdropOpen = true;
    this.isOpen = true;
    this.focusInput();
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
    this.updateInputEvent.emit(this.inputValue)
         let categoryLetter = Object.keys(this.currentTableCell)[0]
      let categoryNumber = Object.values(this.currentTableCell)[0]
      const data = {row:categoryLetter, column: categoryNumber, input: this.inputValue}
      this.GameDataService.addCategory(data)
      // console.log(this.GameDataService.getAllGameData())
    this.closeDialog();
    this.clearInput();
  }


  clearInput() {
    if (this.inputElement) {
      this.inputElement.nativeElement.value = '';
    }
  }
}
