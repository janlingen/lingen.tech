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
  new Lib('hibernate', ['java', 'spring']),
  new Lib('requests', ['python']),
]

  constructor() { }

  getRelatedLibs(skill: string): Lib[] {
    return this.libs.filter((s) => s.relatedSkills.includes(skill));
  }
}
  