import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HistoryService } from '../../services/history.service';

@Component({
  selector: 'app-history-diplayer',
  templateUrl: './history-diplayer.component.html',
  styleUrls: ['./history-diplayer.component.css'],
})
export class HistoryDiplayerComponent implements OnInit {
  commands: string[] = [];
  results: string[][] = [[]];
  private commandsChanged: Subscription;
  private resultsChanged: Subscription;

  constructor(private historyService: HistoryService) {
    this.commandsChanged = this.historyService.commandsChanged.subscribe(
      (commands: string[]) => (this.commands = commands)
    );
    this.resultsChanged = this.historyService.resultsChanged.subscribe(
      (results: Array<Array<string>>) => (this.results = results)
    );
  }

  ngOnInit(): void {
    this.commands = this.historyService.getCommandHistory();
    this.commandsChanged = this.historyService.commandsChanged.subscribe(
      (commands: string[]) => (this.commands = commands)
    );
    this.results = this.historyService.getResultHistory();
    this.resultsChanged = this.historyService.resultsChanged.subscribe(
      (results: Array<Array<string>>) => (this.results = results)
    );
  }

  ngOnDestroy() {
    this.commandsChanged.unsubscribe();
    this.resultsChanged.unsubscribe();
  }
}
