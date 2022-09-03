import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  private commandHistory: string[] = ["test"];
  private resultHistory: string[] = ["test 123"];
  private commandStorage: string[] = [];
  commandsChanged = new Subject<string[]>();
  resultsChanged = new Subject<string[]>();

  constructor() {}

  getCommandHistory(): string[]{
    return this.commandHistory.slice();
  }

  getResultHistory(): string[]{
    return this.resultHistory.slice();
  }

  addCommandResult(command: string, result: string){
    this.commandHistory.push(command);
    console.log(this.commandHistory.length)
    this.commandsChanged.next(this.getCommandHistory());
    this.resultHistory.push(result);
    console.log(this.resultHistory.length)
    this.resultsChanged.next(this.getResultHistory())
    this.commandStorage.push(command);
  }

  clearHistory(){
    this.commandHistory = [];
    this.commandsChanged.next(this.getCommandHistory());
    this.resultHistory = [];
    this.commandsChanged.next(this.getCommandHistory());
  }
}
