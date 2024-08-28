import { Component, inject } from '@angular/core';
import { GameDataService } from '../gamedata.service';
import {
  style,
  state,
  trigger,
  transition,
  animate,
} from '@angular/animations';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-player-entry',
  standalone: true,
  imports: [NgClass],
  templateUrl: './player-entry.component.html',
  styleUrl: './player-entry.component.scss',
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
export class PlayerEntryComponent {
  numOfPlayersSelected: boolean = false;

  numOfPlayers: number = 0;
  playersArray: number[] = [];
  playerNameArr: PlayerNameArr[] = [];
  gameData: GameDataService = inject(GameDataService);
  isDialogOpen: boolean = true;
  isBackdropOpen: boolean = true;
  startingPlayer!: {};
  closeDialog() {
    this.isBackdropOpen = false;
    this.isDialogOpen = false;
  }

  selectAmountOfPlayers(numPlayers: number) {
    // reset arr to prevent duplicate rendering of inputs
    this.playersArray = [];
    this.numOfPlayers = numPlayers;
    this.numOfPlayersSelected = true;
    for (let i: number = 0; i < numPlayers; i++) {
      this.playersArray.push(i + 1);
    }
  }

  captureName(event: Event, idx: number) {
    const inputElement = event.target as HTMLInputElement;
    const newElem: PlayerNameArr = { [`player${idx + 1}`]: inputElement.value };
    this.playerNameArr[idx] = newElem;
  }
  submitNames() {
    this.playerNameArr = this.playerNameArr.slice(0, this.numOfPlayers);
    let names: PlayerNameArr[] = this.playerNameArr;
    const players = this.gameData.updatePlayerNames(names);

    let playerData = [];
    for (let i = 0; i < players.length; i++) {
      const { playerName, playerId } = players[i];
      playerData.push({ playerName, playerId, playerNum: i + 1 });
    }
    const startingPlayer = this.gameData.randomFirstTurnAssignment(playerData);
    this.startingPlayer = startingPlayer;
    this.closeDialog();
  }
}

export interface PlayerNameArr {
  [key: number]: string;
}
