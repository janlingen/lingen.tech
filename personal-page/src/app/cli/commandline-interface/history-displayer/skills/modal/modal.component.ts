import { Component, ViewChild, ElementRef } from '@angular/core';
import { Project } from '../../../../services/project.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @ViewChild('myModal', { static: false }) modal: ElementRef;
  input: string = 'In development...';

  open(skill: string) {
    this.input = skill;
    this.modal.nativeElement.style.display = 'block';
  }

  close() {
    this.modal.nativeElement.style.display = 'none';
  }
}
