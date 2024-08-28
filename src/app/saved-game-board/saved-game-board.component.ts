import { CommonModule, NgClass } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  Output,
  ViewChild,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { GameBoardData, GameDataService, GameScore } from '../gamedata.service';
import { AnswerQuestionComponent } from '../answer-question/answer-question.component';
import { CurrentCell } from '../add-jeopardy-question/add-jeopardy-question.component';
import { PlayerEntryComponent } from '../player-entry/player-entry.component';

@Component({
  selector: 'app-saved-game-board',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    AnswerQuestionComponent,
    PlayerEntryComponent,
    NgClass,
  ],
  templateUrl: './saved-game-board.component.html',
  styleUrl: './saved-game-board.component.scss',
})
export class SavedGameBoardComponent {
  @ViewChild(AnswerQuestionComponent)
  dialog!: AnswerQuestionComponent;
  @Output() goBack: EventEmitter<void> = new EventEmitter<void>();
  gameDataService: GameDataService = inject(GameDataService);
  gameScore: GameScore[] = [];
  gameData: GameBoardData[] = [];
  currentCell!: CurrentCell;
  currentPlayerTurn: any = {};

  async loadGameData() {
    try {
      this.gameData = await this.gameDataService.loadSavedGame();
      // console.log(this.gameData);
    } catch (error) {
      console.error('failed to load saved game', error);
    }
  }

  getCurrentPlayerTurn() {
    try {
      this.currentPlayerTurn = this.gameDataService.getCurrentPlayerTurn();
      console.log(this.currentPlayerTurn);
    } catch (error) {
      console.error("Can't get player turn", error);
    }
  }

  loadGameScore() {
    try {
      this.gameScore = this.gameDataService.getGameScore();
      // console.log(this.gameScore);
      this.getCurrentPlayerTurn();
    } catch (error) {
      console.error('Could not find game score', error);
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

  async ngOnInit() {
    await this.loadGameData();
    this.loadGameScore();
  }
}
