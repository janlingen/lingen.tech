import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills : string[] = ['python']

  constructor() { }

  ngOnInit(): void {
  }

  getSkillImg(skill: string): string{
    return 'assets/' + skill + '.png' 
  }

}
