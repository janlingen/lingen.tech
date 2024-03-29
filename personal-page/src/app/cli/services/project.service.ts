import { Injectable } from '@angular/core';
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
      ['java', 'spring', 'git']
    ),
    new Project(
      'lingen.tech',
      'personal page, with a terminal like look and my favourite colors from the dracula theme',
      'https://github.com/janlingen/lingen.tech',
      ['angular', 'typescript', 'git']
    ),
    new Project(
      'dungeon-game',
      'command line based dungeon game (university project), run around and try not to get caught by monsters until you reach the exit',
      'https://github.com/janlingen/dungeon_game',
      ['c', 'git']
    ),
    new Project(
      'commandline-stocks',
      'small Bloomberg replica to retrieve relevant real-time stock data through yahoo-api and compare multiple stocks or indexes via the command line',
      'https://github.com/janlingen/command_line_stocks',
      ['python', 'git', 'requests', 'rich', 'tabulate', 'python-dotenv']
    ),
    new Project(
      'toggle-hue',
      'simple python script to toggle your Philips hue lights with speech recognition',
      'https://github.com/janlingen/toggle-hue',
      [
        'python',
        'git',
        'requests',
        'SpeechRecognition',
        'pyaudio',
        'python-dotenv',
      ]
    ),
    new Project(
      'sbom-displayer',
      'software bill of material gathering and management tool',
      'https://github.com/janlingen/sbom-displayer',
      ['java', 'git', 'spring', 'cycloneDx', 'neo4j']
    ),
    new Project(
      'springboot-actuator-dashboard',
      'this tool tracks request/response metrics (timestamp, method, URI, status, time taken) and displays them in a table/graph, it also shows application health status (resource usage, errors)',
      'https://github.com/janlingen/springboot-actuator-dashboard',
      ['angular', 'typescript', 'git']
    ),
  ];

  constructor() {}

  getRelatedProjects(skill: string): Project[] {
    return this.projects.filter((s) => s.relatedSkills.includes(skill));
  }
}
