import { Injectable } from '@angular/core';
import { Lib } from './lib.model';

@Injectable({
  providedIn: 'root'
})
export class LibsService {

  libs: Lib[] = [new Lib('spring data', ['java', 'spring']),
  new Lib('angular', ['typescript', 'javascript']),
  new Lib('ionic', ['angular', 'javascript']),
  new Lib('spring cloud', ['java', 'spring']),
  new Lib('JUnit', ['java', 'spring']),
  new Lib('ArchUnit', ['java', 'spring']),
  new Lib('spring data jpa', ['java', 'spring']),
  new Lib('spring data jdbc', ['java', 'spring']),
  new Lib('spring validation', ['java', 'spring']),
  new Lib('spring oauth2', ['java', 'spring']),
  new Lib('spring security', ['java', 'spring']),
  new Lib('spring thymeleaf', ['java', 'spring']),
  new Lib('spring web', ['java', 'spring']),
  new Lib('springdoc openapi', ['java', 'spring']),
  new Lib('mockito', ['java', 'spring']),
  new Lib('testcontainers', ['java', 'spring']),
  new Lib('lombok', ['java', 'spring']),
  new Lib('jackson', ['java', 'spring']),
  new Lib('mapstruct', ['java', 'spring']),
  new Lib('spri', ['java', 'spring']),
  new Lib('hibernate', ['java', 'spring']),
  new Lib('requests', ['python']),
  new Lib('rich', ['python']),
  new Lib('tabulate', ['python']),
  new Lib('dotenv', ['python']),
  new Lib('numpy', ['python']),
  new Lib('pandas', ['python']),
  new Lib('django', ['python', 'django']),
  new Lib('flask', ['python']),
  new Lib('speech recognition', ['python']),
  new Lib('asyncio', ['python']),
  new Lib('threading', ['python']),
]

  constructor() { }

  getRelatedLibs(skill: string): Lib[] {
    return this.libs.filter((s) => s.relatedSkills.includes(skill));
  }
}
  