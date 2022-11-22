import { Component, ViewChild, ElementRef } from '@angular/core';
import { Lib } from 'src/app/cli/services/lib.model';
import { LibsService } from 'src/app/cli/services/libs.service';
import { ProjectService } from 'src/app/cli/services/project.service';
import { Project } from '../../../../services/project.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @ViewChild('myModal', { static: false }) modal: ElementRef;
  input: string = 'In development...';
  relatedLibs: Lib[] = [];
  relatedProjects: Project[] = [];

  constructor(
    private projectService: ProjectService,
    private libsService: LibsService
  ) {}

  open(skill: string) {
    this.input = skill;
    this.relatedProjects = this.projectService.getRelatedProjects(skill);
    this.relatedLibs = this.libsService.getRelatedLibs(skill);
    this.modal.nativeElement.style.display = 'block';
  }

  close() {
    this.modal.nativeElement.style.display = 'none';
  }
}
