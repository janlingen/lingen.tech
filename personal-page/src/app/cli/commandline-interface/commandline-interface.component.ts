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
      case 'help':
        this.historyService.addCommandResult(this.currentCommand, ['help --> show all viable commands',
                                                                    'clear --> clears the commandline',
                                                                    'about --> get a short description of myself',
                                                                    'email --> to find out my mail and instantly send me one',
                                                                    'linkedin --> to look up some of my work experience',
                                                                    'github --> to look up my github profile',
                                                                    'projects --> to see all the repositories of my personal projects beside work',
                                                                    'history --> showing all commands you typed to far in this session']);
        break;
      case 'clear':
        this.historyService.clearHistory();
        break;
      case 'about':
        this.historyService.addCommandResult(
          this.currentCommand,
          [`I am currently completing two Bachelor's degrees, one in Computer Science
          and one in Business Administration. My particular interests are data science,
          financial markets, business intelligence and blockchain technologies.`]
        );
        break;
      case 'email':
        window.open('mailto:info@lingen.tech')
        this.historyService.addCommandResult(this.currentCommand, ['mailto:info@lingen.tech']);
        break;
      case 'linkedin':
        this.historyService.addCommandResult(this.currentCommand, ['']);
        break;
      case 'github':
        window.open('https://github.com/janlingen')
        this.historyService.addCommandResult(this.currentCommand, ['Opening a new tab with github-profile...']);
        break;
      case 'projects':
        window.open('https://github.com/janlingen?tab=repositories')
        this.historyService.addCommandResult(this.currentCommand, ['Opening a new tab with github-repositories...']);
        break;
      case 'history':
        this.historyService.addCommandResult(this.currentCommand, this.historyService.getHistory());
        break;
      case 'banner':
        this.historyService.addCommandResult(this.currentCommand, ['']);
        break;
      case '':
        this.historyService.addCommandResult(this.currentCommand, ['']);
        break;
      default:
        this.historyService.addCommandResult(
          this.currentCommand,
          [`cli: command not found: ${this.currentCommand}`, `Type 'help' to see all viable commands.`]
        );
        break;
    }
  }
}
