import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projects: Project[] = [
    new Project(
      'attendance-manager',
      'a spring boot application with a web user interface (thymeleaf) to manage project participant absences in a university environment where students need to build daily attendance into their flexible schedule, which may be filled with exams or other appointments away from home',
      'https://github.com/janlingen/attendance-manager',
      ['java', 'spring', 'git', 'docker', 'sql']
    ),
    new Project(
      'archunit-presets',
      'a few examples of recurring architectures in the daily work of a software developer',
      'https://github.com/janlingen/archunit-presets',
      ['java', 'spring']
    ),
  ];

  constructor() {}

  getRelatedProjects(skill: string): Project[] {
    return this.projects.filter((s) => s.relatedSkills.includes(skill));
  }
}
