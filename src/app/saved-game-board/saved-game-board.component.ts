import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  Output,
  ViewChild,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { GameBoardData, GameDataService } from '../gamedata.service';
import { AnswerQuestionComponent } from '../answer-question/answer-question.component';
import { CurrentCell } from '../add-jeopardy-question/add-jeopardy-question.component';

@Component({
  selector: 'app-saved-game-board',
  standalone: true,
  imports: [CommonModule, MatIconModule, AnswerQuestionComponent],
  templateUrl: './saved-game-board.component.html',
  styleUrl: './saved-game-board.component.scss',
})
export class SavedGameBoardComponent {
  @ViewChild(AnswerQuestionComponent)
  dialog!: AnswerQuestionComponent;
  @Output() goBack: EventEmitter<void> = new EventEmitter<void>();
  gameDataService: GameDataService = inject(GameDataService);
  gameData: GameBoardData[] = [];
  currentCell!: CurrentCell;
  async loadGameData() {
    try {
      this.gameData = await this.gameDataService.loadSavedGame();
      console.log(this.gameData);
    } catch (error) {
      console.error('failed to load saved game', error);
    }
  }
  getCurrentQuestion(row: number, column: string) {
    const cell = this.gameData.find((x: any) => {
      return x.row === row && x.column === column;
    });
    if (cell) {
      this.currentCell = cell;
    }
  }
  openDialog(row: number, column: string) {
    console.log(`clicked ${row}, ${column}`);
    this.getCurrentQuestion(row, column);
    this.dialog.openDialog();
    console.log(this.currentCell);
  }

  onBackClick() {
    this.goBack.emit();
  }

  ngOnInit() {
    this.loadGameData();
    console.log(this.gameData);
  }
}
