import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  commandHistory: string[] = [];
  resultHistory: string[] = [];

  constructor() {}

  getCommandHistory(): string[]{
    return this.commandHistory.slice();
  }

  getResultHistory(): string[]{
    return this.resultHistory.slice();
  }
}
