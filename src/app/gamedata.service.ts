import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GameDataService {
  url = 'http://localhost:3000/gameData';

  protected gameData: GameBoardData[] = [
    // categoryies -> ROW 0
    { column: 'A', row: 0, categoryName: 'Category A', complete: false },
    { column: 'B', row: 0, categoryName: 'Category B', complete: false },
    { column: 'C', row: 0, categoryName: 'Category C', complete: false },
    { column: 'D', row: 0, categoryName: 'Category D', complete: false },
    { column: 'E', row: 0, categoryName: 'Cagtegory E', complete: false },
    // $100 -> ROW 1
    {
      column: 'A',
      row: 1,
      pointValue: 100,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
      complete: false,
    },
    {
      column: 'B',
      row: 1,
      pointValue: 100,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
      complete: false,
    },
    {
      column: 'C',
      row: 1,
      pointValue: 100,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
      complete: false,
    },
    {
      column: 'D',
      row: 1,
      pointValue: 100,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
      complete: false,
    },
    {
      column: 'E',
      row: 1,
      pointValue: 100,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
      complete: false,
    },
    // $200 -> ROW 2
    {
      column: 'A',
      row: 2,
      pointValue: 200,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
      complete: false,
    },
    {
      column: 'B',
      row: 2,
      pointValue: 200,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
      complete: false,
    },
    {
      column: 'C',
      row: 2,
      pointValue: 200,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
      complete: false,
    },
    {
      column: 'D',
      row: 2,
      pointValue: 200,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
      complete: false,
    },
    {
      column: 'E',
      row: 2,
      pointValue: 200,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
      complete: false,
    },

    {
      column: 'A',
      row: 3,
      pointValue: 300,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
      complete: false,
    },
    {
      column: 'B',
      row: 3,
      pointValue: 300,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
      complete: false,
    },
    {
      column: 'C',
      row: 3,
      pointValue: 300,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
      complete: false,
    },
    {
      column: 'D',
      row: 3,
      pointValue: 300,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
      complete: false,
    },
    {
      column: 'E',
      row: 3,
      pointValue: 300,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
      complete: false,
    },
    // $400 -> ROW 4
    {
      column: 'A',
      row: 4,
      pointValue: 400,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
      complete: false,
    },
    {
      column: 'B',
      row: 4,
      pointValue: 400,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
      complete: false,
    },
    {
      column: 'C',
      row: 4,
      pointValue: 400,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
      complete: false,
    },
    {
      column: 'D',
      row: 4,
      pointValue: 400,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
      complete: false,
    },
    {
      column: 'E',
      row: 4,
      pointValue: 400,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
      complete: false,
    },
    // $400 -> ROW 5
    {
      column: 'A',
      row: 5,
      pointValue: 500,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
      complete: false,
    },
    {
      column: 'B',
      row: 5,
      pointValue: 500,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
      complete: false,
    },
    {
      column: 'C',
      row: 5,
      pointValue: 500,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
      complete: false,
    },
    {
      column: 'D',
      row: 5,
      pointValue: 500,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
      complete: false,
    },
    {
      column: 'E',
      row: 5,
      pointValue: 500,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
      complete: false,
    },
  ];

  getAllGameData(): GameBoardData[] {
    return this.gameData;
  }

  // getCategory(): Categories[] {
  //   return this.gameData.categories;
  // }

  constructor(private http: HttpClient) {}

  async loadSavedGame(): Promise<GameBoardData[]> {
    const response = await fetch(this.url);
    const data = await response.json();
    this.gameData = data;
    // console.log(this.gameData);
    return data;
  }

  addQuestion(data: any) {
    console.log(data);
    const questionToUpdate = this.gameData.find(
      (x) => x.row === Number(data.row) && x.column === data.column
    );
    if (questionToUpdate) {
      questionToUpdate.question = data.question;
    }

    if (questionToUpdate?.answerOptions) {
      questionToUpdate.answerOptions = [
        { A: data.A },
        { B: data.B },
        { C: data.C },
        { D: data.D },
      ];
    }
    if (questionToUpdate?.answer) {
      const idx = data.answer;
      questionToUpdate.answer = { [data.answer]: data[idx][0] };
    }
    if (questionToUpdate?.complete === false) {
      questionToUpdate.complete = true;
    }
    console.log(questionToUpdate);
  }

  addCategory(data: any) {
    if (data.column) {
      const column: string = data.column;

      const categoryToUpdate = this.gameData.find(
        (x) => x.row === 0 && x.column === column
      );
      if (categoryToUpdate) {
        categoryToUpdate.categoryName = data.input;
        console.log(this.gameData);
      }
    }
  }
}

export interface GameData {
  categories: Categories[];
}

export interface Categories {
  categoryName: string;
  categoryId: number;
}

export interface GameBoardData {
  column: string;
  row: number;
  categoryName?: string;
  question?: string;
  answer?: AnswerType;
  answerOptions?: AnswerOptions;
  pointValue?: number;
  complete: boolean;
}
export type AnswerType = { [key: string]: string };
export type AnswerOptions = AnswerType[];
