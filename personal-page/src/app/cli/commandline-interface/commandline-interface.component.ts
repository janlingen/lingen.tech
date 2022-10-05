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
    if (['Enter', 'Return'].includes(event.key)) {
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
      'skills',
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
        this.historyService.addCommandResult(command, [
          'help, clear, about, github, projects, email, linkedin, history, gui, skills, technologies',
          '---------------------------------------------------------------------------------------',
          'You can press "Enter" after entering a character to trigger auto-completion.',
        ]);
        break;
      case 'ls':
        this.historyService.addCommandResult(command, [
          'help clear about github',
          'projects email linkedin history',
          ' gui skills technologies',
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
      case 'technologies':
        this.historyService.addCommandResult(command, [
          'Languages: Java, Python, TypeScript, JavaScript, C, HTML/CSS, SQL',
          'Major frameworks: Spring, Django, Angular',
          'Others: Git, Docker, Linux, many other small libraries/frameworks(such as JUnit, ArchUnit, Mockito, Jackson, MapStruct, etc.)',
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
