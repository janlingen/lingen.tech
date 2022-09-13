import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  private commandHistory: string[] = [];
  private resultHistory: Array<Array<string>> = [];
  private commandStorage: string[] = [];
  commandsChanged = new Subject<string[]>();
  resultsChanged = new Subject<Array<Array<string>>>();

  constructor() {}

  getCommandHistory(): string[]{
    return this.commandHistory.slice();
  }

  getResultHistory(): Array<Array<string>>{
    return this.resultHistory;
  }

  addCommandResult(command: string, result: string[]){
    this.commandHistory.push(command);
    this.commandStorage.push(command);
    this.commandsChanged.next(this.getCommandHistory());
    this.resultHistory.push(result);
    this.resultsChanged.next(this.getResultHistory())
    this.commandStorage.push(command);
  }

  getHistory(){
    return this.commandStorage.slice();
  }

  clearHistory(){
    this.commandHistory = [];
    this.commandsChanged.next(this.getCommandHistory());
    this.resultHistory = [[]];
    this.commandsChanged.next(this.getCommandHistory());
  }
}
