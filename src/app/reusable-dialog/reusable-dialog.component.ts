import { Component, ElementRef, ViewChild,Input} from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reusable-dialog',
  templateUrl: './reusable-dialog.component.html',
  styleUrls: ['./reusable-dialog.component.css'],
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('openDialog', [
      state('open', style({ opacity: 1 })),
      state('closed', style({ opacity: 0 })),
      transition('open <=> closed', animate('100ms')),
    ]),
    trigger('openBackdrop', [
      state('open', style({ opacity: 1, zIndex: 50 })),
      state('closed', style({ opacity: 0, zIndex: -50 })),
      transition('open <=> closed', animate('200ms')),
    ]),
  ],
})
export class ReusableDialogComponent {
  isOpen: boolean = false;
  isBackdropOpen: boolean = false;

  inputValue:string = ''

 @ViewChild('inputElement') inputElement!: ElementRef;

 @Input() elemList!: string[];

  openDialog() {
    this.isBackdropOpen = true;
    this.isOpen = true;
  }
  closeDialog() {
    this.isBackdropOpen = false;
    this.isOpen = false;
    this.clearInput()
  }
  handleChange(e:Event){
    const inputElement = e.target as HTMLInputElement;
    this.inputValue = inputElement.value;
  }
  submit() {
    this.elemList.push(this.inputValue)
    this.clearInput()
    console.log(this.elemList)
    this.closeDialog()
  }
  clearInput(){
    this.inputElement.nativeElement.value =''
  }
}
