import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  @ViewChild('modal', { static: false }) modal: ModalComponent;

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
    false,
    false,
    false,
    false,
  ];

  skillsToLoad: string[] = [
    'python',
    'java',
    'javascript',
    'clojure',
    'typescript',
    'c',
    'spring',
    'angular',
    'django',
    'ionic',
    'bash',
    'git',
    'docker',
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
    }, 150);
  }

  openModal(skill: string) {
    this.modal.open(skill);
  }
}
