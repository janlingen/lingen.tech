import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../services/history.service';

@Component({
  selector: 'app-commandline-interface',
  templateUrl: './commandline-interface.component.html',
  styleUrls: ['./commandline-interface.component.css'],
  providers: [HistoryService],
})
export class CommandlineInterfaceComponent implements OnInit {
  currentCommand: string = '';

  constructor(private historyService: HistoryService) {}

  ngOnInit(): void {}

  onKeypress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.checkCommand();
      this.currentCommand = '';
    }
  }

  checkCommand() {
    switch (this.currentCommand.toLowerCase()) {
      case 'clear':
        this.historyService.clearHistory();
        break;
      case 'about':
        this.historyService.addCommandResult(
          this.currentCommand,
          `I am currently completing two Bachelor's degrees, one in Computer Science 
          and one in Business Administration. My particular interests are data science, 
          financial markets, business intelligence and blockchain technologies.`
        );
        break;
      case '':
        this.historyService.addCommandResult(this.currentCommand, '');
        break;
      default:
        this.historyService.addCommandResult(
          this.currentCommand,
          `cli: command not found: ${this.currentCommand}`
        );
        break;
    }
  }
}
