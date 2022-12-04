import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css'],
})
export class HelpComponent implements OnInit {
  commands: string[] = [
    'help',
    'clear',
    'about',
    'skills',
    'github',
    'projects',
    'email',
    'linkedin',
    'history',
    'gui',
    'technologies',
    'ls',
    'secret'
  ];

  declarations: string[] = [
    'show all viable commands',
    'clear the commandline',
    'get a short description of me',
    'show some of my skills (click on the icons)',
    'loop up my github-profile',
    'take a look on all my public projects',
    'send me a mail',
    'look up my linkedin-profile',
    'show all commands u have used to far',
    'graphical user interface',
    'more detailed than skills',
    'short list of all commands',
    'find out yourself',
  ];

  constructor() {}

  ngOnInit(): void {}
}
