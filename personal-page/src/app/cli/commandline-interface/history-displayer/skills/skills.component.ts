import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: string[] = [];
  skillsHovered: boolean[] = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];
  skillsToLoad: string[] = [
    'python',
    'java',
    'angular',
    'bash',
    'git',
    'django',
    'ionic',
    'javascript',
    'spring',
  ];

  constructor() {}

  onHover(index: number) {
    this.skillsHovered[index] = !this.skillsHovered[index];
  }

  ngOnInit(): void {
    this.getArraySlowly(0);
  }

  getSkillImg(skill: string): string {
    return 'assets/' + skill + '.png';
  }

  getArraySlowly(index: number) {
    setInterval(() => {
      if (index == this.skillsToLoad.length) return;
      this.skills.push(this.skillsToLoad[index]);
      index++;
    }, 300);
  }
}
