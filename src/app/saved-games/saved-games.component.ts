import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { GameDataService } from '../gamedata.service';
import { SavedGameBoardComponent } from '../saved-game-board/saved-game-board.component';

@Component({
  selector: 'app-saved-games',
  standalone: true,
  imports: [MatIconModule, SavedGameBoardComponent, SavedGameBoardComponent],
  templateUrl: './saved-games.component.html',
  styleUrl: './saved-games.component.scss',
})
export class SavedGamesComponent {
  showSavedGame: boolean = false;
  @Output() goBack: EventEmitter<void> = new EventEmitter<void>();
  GameDataService: GameDataService = inject(GameDataService);

  // gameData!: GameDataService

  onBackClick() {
    this.goBack.emit();
  }

  selectGame(str: string) {
    if (str === 'game1') {
      this.showSavedGame = true;
    }
  }
}
