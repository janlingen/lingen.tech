import { Injectable } from '@angular/core';
import { Lib } from './lib.model';

@Injectable({
  providedIn: 'root'
})
export class LibsService {

  libs: Lib[] = [new Lib('spring data', ['java', 'spring'])]

  constructor() { }

  getRelatedLibs(skill: string): Lib[] {
    return this.libs.filter((s) => s.relatedSkills.includes(skill));
  }
}
  