import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HistoryService } from '../../services/history.service';

@Component({
  selector: 'app-history-displayer',
  templateUrl: './history-displayer.component.html',
  styleUrls: ['./history-displayer.component.css'],
})
export class HistoryDisplayerComponent implements OnInit, OnDestroy {
  commands: string[] = [];
  results: string[][] = [[]];
  private commandsChanged: Subscription;
  private resultsChanged: Subscription;

  constructor(private historyService: HistoryService) {}

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

  ngOnDestroy(): void {
    this.commandsChanged.unsubscribe();
    this.resultsChanged.unsubscribe();
  }
}
