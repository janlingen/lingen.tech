import { Injectable } from '@angular/core';
import { CommandResultPair } from '../../models/command-result-pair.model';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  history: CommandResultPair[] = [];
  
  constructor() {}

  showHistory(): string[]{
    let commands: string[] = []
    for(var pair of this.history){
      commands.push(pair.result)
    }
    return commands;
  }
}
