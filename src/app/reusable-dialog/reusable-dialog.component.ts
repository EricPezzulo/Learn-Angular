// import {
//   animate,
//   state,
//   style,
//   transition,
//   trigger,
// } from '@angular/animations';
// import { CommonModule } from '@angular/common';
// import { Component, EventEmitter, Input, Output } from '@angular/core';

// @Component({
//   selector: 'app-reusable-dialog',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './reusable-dialog.component.html',
//   styleUrl: './reusable-dialog.component.css',
//   animations: [
//     trigger('openDialog', [
//       state(
//         'open',
//         style({
//           opacity: 1,
//           // display: 'fixed',
//           transform: 'translateY(0px)',
//           zIndex: 20,

//         })
//       ),
//       state(
//         'closed',
//         style({
//           opacity: 1,
//           zIndex: -10,
//           transform: 'translateY(35px)',
//         })
//       ),
//       transition('open <=> closed', animate('.2s ease-in-out')),
//       // transition('closed => open', animate('.2s ease-in')),
//     ]),
//     trigger('openBackdrop', [
//       state(
//         'open',
//         style({
//           opacity: 1,
//           zIndex:10
//         })
//       ),
//       state(
//         'closed',
//         style({
//           opacity: 0,
//           zIndex: -10,
//           // transform: 'translateY(0px)',
//         })
//       ),
//       transition('open <=> closed', animate('.2s ease-in-out')),
//     ]),
//   ],
// })
// export class ReusableDialogComponent {
//   @Input() isDialogOpen: boolean = false;
//   @Input() isDropShadowOpen: boolean = false;
//   @Output() handleCloseDialog: EventEmitter<void> = new EventEmitter<void>();

//   handleClose() {
//     this.isDialogOpen = false;
//     this.handleCloseDialog.emit();
//   }
//   ngOnInit() {
//     console.log(this.isDialogOpen);
//   }
// }
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
      state(
        'open',
        style({ opacity: 1, transform: 'translateY(0)', zIndex: 30 })
      ),
      state(
        'closed',
        style({ opacity: 1, transform: 'translateY(35px)', zIndex: -10 })
      ),
      transition('open <=> closed', animate('.2s ease-in-out')),
    ]),
    trigger('openBackdrop', [
      state('open', style({ opacity: 1, zIndex: 20 })),
      state('closed', style({ opacity: 0, zIndex: -10 })),
      transition('open <=> closed', animate('.2s ease-in-out')),
    ]),
  ],
})
export class ReusableDialogComponent {
  @Input() isDialogOpen: boolean = false;
  @Input() isDropShadowOpen: boolean = false;
  @Output() handleCloseDialog: EventEmitter<void> = new EventEmitter<void>();

  isOpen: boolean = true;

  openDialog() {
    this.isOpen = true;
  }
  closeDialog() {
    this.isOpen = false;
  }

  handleClose() {
    this.isDialogOpen = false;
    this.isDropShadowOpen = false;
    this.handleCloseDialog.emit();
  }
}
