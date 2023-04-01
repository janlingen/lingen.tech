import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { Skill } from './skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  @ViewChild('modal', { static: false }) modal: ModalComponent;

  skills: Skill[] = [];

  skillsToLoad: Skill[] = [
    new Skill('python'),
    new Skill('java'),
    new Skill('javascript'),
    new Skill('clojure'),
    new Skill('typescript'),
    new Skill('c'),
    new Skill('spring'),
    new Skill('angular'),
    new Skill('django'),
    new Skill('ionic'),
    new Skill('bash'),
    new Skill('git'),
    new Skill('docker'),
    new Skill('gradle'),
    new Skill('ansible')
  ];

  constructor() {}

  onHover(index: number) {
    this.skills[index].hovered = !this.skills[index].hovered;
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
