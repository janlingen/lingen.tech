import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistoryService } from '../services/history.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-commandline-interface',
  templateUrl: './commandline-interface.component.html',
  styleUrls: ['./commandline-interface.component.css'],
  providers: [HistoryService],
})
export class CommandlineInterfaceComponent implements OnInit {
  currentCommand: string = '';

  constructor(
    private historyService: HistoryService,
    private router: Router,
    private titleService: Title
  ) {
    this.titleService.setTitle('lingen.tech | CLI');
    this.checkCommand('banner');
    this.checkCommand('help');
  }

  ngOnInit(): void {}

  onKeypress(event: KeyboardEvent) {
    if (['Enter', 'Return'].includes(event.key)) {
      this.completeCommand();
      this.checkCommand(this.currentCommand);
      if (
        !['gui', 'secret', 'prob-sim'].includes(
          this.currentCommand.toLowerCase()
        )
      ) {
        setTimeout(() => {
          this.router.navigate([], { fragment: 'mainInput' });
        }, 1);
        this.router.navigate([]);
      }
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
      'skills',
      'secret',
      'prob-sim',
    ];
    if (this.currentCommand.length >= 1) {
      if (this.currentCommand.startsWith('cd ')) {
        this.currentCommand = this.currentCommand.substring(3);
        console.log(this.currentCommand);
      }
      const matches = commands.filter((s) => s.startsWith(this.currentCommand));
      if (matches.length >= 1) {
        this.currentCommand = matches[0];
      }
    }
  }

  checkCommand(command: string) {
    switch (command.toLowerCase()) {
      case 'help':
        this.historyService.addCommandResult(command, ['help-display']);
        break;
      case 'secret':
        this.historyService.addCommandResult(command, ['navigating to secret']);
        this.router.navigate(['/secret']);
        break;
      case 'prob-sim':
        this.historyService.addCommandResult(command, [
          'navigating to prob-sim',
        ]);
        this.router.navigate(['/prob-sim']);
        break;
      case 'ls':
        this.historyService.addCommandResult(command, [
          'help/ clear/ about/ github/',
          'projects/ email/ linkedin/ history/',
          'gui/ skills/ technologies/',
        ]);
        break;
      case 'clear':
        this.historyService.clearHistory();
        break;
      case 'about':
        this.historyService.addCommandResult(command, ['about-display']);
        break;
      case 'email':
        window.open('mailto:jan.lingen@hhu.de');
        this.historyService.addCommandResult(command, [
          'mailto:jan.lingen@hhu.de',
        ]);
        break;
      case 'linkedin':
        window.open(
          'https://www.linkedin.com/in/jan-hendrik-lingen-11a922236/',
          '_blank'
        );
        this.historyService.addCommandResult(command, [
          'Opening a new tab with linkedin-profile...',
        ]);
        break;
      case 'github':
        window.open('https://github.com/janlingen', '_blank');
        this.historyService.addCommandResult(command, [
          'Opening a new tab with github-profile...',
        ]);
        break;
      case 'projects':
        window.open('https://github.com/janlingen?tab=repositories', '_blank');
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
        this.historyService.addCommandResult(command, ['banner-display']);
        break;
      case 'gui':
        this.historyService.addCommandResult(command, ['navigating to gui']);
        this.router.navigate(['/gui']);
        break;
      case 'skills':
        this.historyService.addCommandResult(command, ['skills-display']);
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
