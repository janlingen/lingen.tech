import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css'],
})
export class SecretComponent {
  success = false;
  wrong = false;
  input: string = '';

  constructor(private router: Router, private titleService: Title) {
    this.titleService.setTitle('lingen.tech | SECRET');
  }

  checkInput() {
    if (this.input == 'hcasgpelhgtls') {
      this.success = true;
      this.wrong = false;
    } else {
      this.success = false;
      this.wrong = true;
    }
  }

  backwards() {
    this.router.navigate(['/cli']);
  }
}
