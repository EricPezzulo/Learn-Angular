import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GamedataService {
  constructor() {}

  gameData: gameDataType = {
    categories: [
      { categoryName: 'TEST', categoryId: 1 },
      { categoryName: '', categoryId: 2 },
      { categoryName: '', categoryId: 3 },
      { categoryName: '', categoryId: 4 },
      { categoryName: '', categoryId: 5 },
    ],
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
  };

  getCategory(): categories[] {
    return this.gameData.categories;
  }

  updateCategryName(categoryId: number) {
    const category = this.gameData.categories.find(
      (x: any) => (x.categoryId = categoryId)
    );
    return category;
  }
}

export interface gameDataType {
  categories: categories[];
}

export interface categories {
  categoryName: string;
  categoryId: number;
}
