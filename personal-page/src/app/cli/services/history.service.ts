import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  private commandHistory: string[] = ["test"];
  private resultHistory: string[] = ["test 123"];
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
    this.commandsChanged.next(this.getCommandHistory());
    this.resultHistory.push(result);
    this.resultsChanged.next(this.getResultHistory())
  }
}
