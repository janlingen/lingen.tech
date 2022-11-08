export class Project {
  public name: string;
  public description: string;
  public link: string;
  public relatedSkills: string[];

  constructor(
    name: string,
    description: string,
    link: string,
    relatedSkills: string[]
  ) {
    this.name = name;
    this.description = description;
    this.link = link;
    this.relatedSkills = relatedSkills;
  }
}
