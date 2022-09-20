import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistoryService } from '../services/history.service';

@Component({
  selector: 'app-commandline-interface',
  templateUrl: './commandline-interface.component.html',
  styleUrls: ['./commandline-interface.component.css'],
  providers: [HistoryService],
})
export class CommandlineInterfaceComponent implements OnInit {
  currentCommand: string = '';

  constructor(private historyService: HistoryService, private router: Router) {
    this.checkCommand('banner');
    this.checkCommand('help');
  }

  ngOnInit(): void {}

  onKeypress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.completeCommand();
      this.checkCommand(this.currentCommand);
      this.currentCommand = '';
    }
  }

  completeCommand() {
    const commands = [
      'help',
      'clear',
      'about',
      'email',
      'linkedin',
      'github',
      'projects',
      'history',
      'banner',
      'gui',
    ];
    if (this.currentCommand.length >= 1) {
      const matches = commands.filter((s) => s.startsWith(this.currentCommand));
      if (matches.length >= 1) {
        this.currentCommand = matches[0];
      }
    }
  }

  checkCommand(command: string) {
    switch (command.toLowerCase()) {
      case 'help':
        this.historyService.addCommandResult(command, [
          'help, clear, about, github, projects, email, linkedin, history, gui',
          '---------------------------------------------------------------------------------------',
          'You can press "Enter" after entering a character to trigger auto-completion.',
        ]);
        break;
      case 'clear':
        this.historyService.clearHistory();
        break;
      case 'about':
        this.historyService.addCommandResult(command, [
          `I am currently pursuing two bachelor's degrees, one in computer science
          and one in business administration. My special interests are all kinds of programming tasks,
          financial markets, business intelligence, chess and blockchain technologies.`,
        ]);
        break;
      case 'email':
        window.open('mailto:info@lingen.tech');
        this.historyService.addCommandResult(command, [
          'mailto:info@lingen.tech',
        ]);
        break;
      case 'linkedin':
        window.open(
          'https://www.linkedin.com/in/jan-hendrik-lingen-11a922236/'
        );
        this.historyService.addCommandResult(command, [
          'Opening a new tab with linkedin-profile...',
        ]);
        break;
      case 'github':
        window.open('https://github.com/janlingen');
        this.historyService.addCommandResult(command, [
          'Opening a new tab with github-profile...',
        ]);
        break;
      case 'projects':
        window.open('https://github.com/janlingen?tab=repositories');
        this.historyService.addCommandResult(command, [
          'Opening a new tab with github-repositories...',
        ]);
        break;
      case 'history':
        this.historyService.addCommandResult(
          command,
          this.historyService.getHistory()
        );
        break;
      case 'banner':
        this.historyService.addCommandResult(command, ['banner']);
        break;
      case 'gui':
        this.historyService.addCommandResult(command, ['navigating to gui']);
        this.router.navigate(['/gui']);
        break;
      case '':
        this.historyService.addCommandResult(command, ['']);
        break;
      default:
        this.historyService.addCommandResult(command, [
          `cli: command not found: ${command}`,
          `Type 'help' to see all viable commands.`,
        ]);
        break;
    }
  }
}
