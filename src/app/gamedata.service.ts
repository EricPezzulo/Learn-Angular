import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameDataService {
  protected gameData: GameBoardData[] = [
    // categoryies -> ROW 0
    { column: 'A', row: 0, categoryName: 'Sports' },
    { column: 'B', row: 0, categoryName: 'Technology' },
    { column: 'C', row: 0, categoryName: 'Music' },
    { column: 'D', row: 0, categoryName: 'History' },
    { column: 'E', row: 0, categoryName: 'Random' },
    // $100 -> ROW 1
    {
      column: 'A',
      row: 1,
      pointValue: 100,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
    },
    {
      column: 'B',
      row: 1,
      pointValue: 100,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
    },
    {
      column: 'C',
      row: 1,
      pointValue: 100,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
    },
    {
      column: 'D',
      row: 1,
      pointValue: 100,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
    },
    {
      column: 'E',
      row: 1,
      pointValue: 100,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
    },
    // $200 -> ROW 2
    {
      column: 'A',
      row: 2,
      pointValue: 200,
      question: '7-4?',
      answer: { A: '3' },
      answerOptions: [{ A: '3' }, { B: '1' }, { C: '6' }, { D: '0' }],
    },
    {
      column: 'B',
      row: 2,
      pointValue: 200,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
    },
    {
      column: 'C',
      row: 2,
      pointValue: 200,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
    },
    {
      column: 'D',
      row: 2,
      pointValue: 200,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
    },
    {
      column: 'E',
      row: 2,
      pointValue: 200,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
    },
    // $300 -> ROW 3
    {
      column: 'A',
      row: 3,
      pointValue: 300,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
    },
    {
      column: 'B',
      row: 3,
      pointValue: 300,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
    },
    {
      column: 'C',
      row: 3,
      pointValue: 300,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
    },
    {
      column: 'D',
      row: 3,
      pointValue: 300,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
    },
    {
      column: 'E',
      row: 3,
      pointValue: 300,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
    },
    // $400 -> ROW 4
    {
      column: 'A',
      row: 4,
      pointValue: 400,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
    },
    {
      column: 'B',
      row: 4,
      pointValue: 400,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
    },
    {
      column: 'C',
      row: 4,
      pointValue: 400,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
    },
    {
      column: 'D',
      row: 4,
      pointValue: 400,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
    },
    {
      column: 'E',
      row: 4,
      pointValue: 400,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
    },
    // $400 -> ROW 5
    {
      column: 'A',
      row: 5,
      pointValue: 500,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
    },
    {
      column: 'B',
      row: 5,
      pointValue: 500,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
    },
    {
      column: 'C',
      row: 5,
      pointValue: 500,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
    },
    {
      column: 'D',
      row: 5,
      pointValue: 500,
      question: '',
      answer: {},
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
    },
    {
      column: 'E',
      row: 5,
      pointValue: 500,
      question: '',
      answer: { A: 'lorem ipsum' },
      answerOptions: [{ A: '' }, { B: '' }, { C: '' }, { D: '' }],
    },
  ];

  // protected gameData: GameData = {
  //   categories: [
  //     { categoryName: 'TEST', categoryId: 1 },
  //     { categoryName: '', categoryId: 2 },
  //     { categoryName: '', categoryId: 3 },
  //     { categoryName: '', categoryId: 4 },
  //     { categoryName: '', categoryId: 5 },
  //   ],
  // '1stRow': [
  //   {
  //     A1: 'hi',
  //   },
  //   {
  //     B1: 'hiiii',
  //   },
  //   {
  //     C1: {
  //       value: 100,
  //       question: 'How many letters?',
  //       answer: { D: 14 },
  //       options: [{ A: 10 }, { B: 12 }, { C: 3 }, { D: 14 }],
  //     },
  //   },
  // ],
  // };

  getAllGameData(): GameBoardData[] {
    return this.gameData;
  }

  // getCategory(): Categories[] {
  //   return this.gameData.categories;
  // }

  addCategory(data: any) {
    console.log(data);
    if (data.tableCell) {
      const column: string = Object.values(data.tableCell).toString();
      const categoryToUpdate = this.gameData.find(
        (x) => x.row === 0 && x.column === column
      );

      if (categoryToUpdate) {
        categoryToUpdate.categoryName = data.categoryName;
      }

      // const column = Object.values(data.tableCell).toString();

      // console.log(categoryToUpdate)
    }

    // updateCategryName(categoryId: number) {
    //   const category = this.gameData.categories.find(
    //     (x: any) => (x.categoryId = categoryId)
    //   );
    //   return category;
    // }
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
}
export type AnswerType = { [key: string]: string };
export type AnswerOptions = AnswerType[];
