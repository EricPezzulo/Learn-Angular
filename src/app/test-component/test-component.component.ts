import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-test-component',
  standalone: true,
  imports: [],
  templateUrl: './test-component.component.html',
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          // height: '200px',
          opacity: 1,
  
        })
      ),
      state(
        'closed',
        style({
          // height: '100px',
          opacity: 0,
          transform: 'translatey(35px)',
          
      
        })
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('1s')]),
    ]),
  ],
})
export class TestComponentComponent {

  isOpen:boolean = true;

  toggle(){
    this.isOpen = !this.isOpen
  }
}
